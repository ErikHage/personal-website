import assert from 'node:assert/strict';
import http from 'node:http';
import { AddressInfo } from 'node:net';
import path from 'node:path';
import { after, before, test } from 'node:test';

import getApp from './app';

const pages = [
  { route: '/', title: 'Erik Hage', },
  { route: '/about-me', title: 'Erik Hage: About Me', },
  { route: '/professional-experience', title: 'Erik Hage: Professional Experience', },
  { route: '/personal-projects', title: 'Erik Hage: Personal Projects', },
  { route: '/red-white-and-brew', title: 'Erik Hage: RW&B', },
  { route: '/reading/log', title: 'Erik Hage: Reading Log', },
  { route: '/reading/stats', title: 'Erik Hage: Reading Stats', },
  { route: '/reading/series', title: 'Erik Hage: Reading Series', },
];

let server: http.Server;
let baseUrl: string;

// Images are left out on purpose: their paths come from the hand-maintained data files.
function getLocalUrls(html: string): string[] {
  const matches = html.matchAll(/(?:href|<script src)="(\/[^/"#][^"#]*|\/)[#"]/g);
  return Array.from(matches, (match) => match[1]!);
}

before(async () => {
  server = http.createServer(getApp(path.resolve(__dirname), '0'));
  await new Promise<void>((resolve) => server.listen(0, resolve));
  baseUrl = `http://localhost:${(server.address() as AddressInfo).port}`;
});

after(() => {
  server.close();
  server.closeAllConnections();
});

for (const { route, title, } of pages) {
  test(`${route} renders with working links, styles and scripts`, async () => {
    const response = await fetch(`${baseUrl}${route}`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') ?? '', /^text\/html/);
    assert.ok(html.includes(`<title>${title}</title>`), `expected the title "${title}"`);

    const localUrls = new Set(getLocalUrls(html));
    assert.ok(localUrls.size > 0, 'expected the page to reference local URLs');

    for (const url of localUrls) {
      const asset = await fetch(`${baseUrl}${url}`, { method: 'HEAD', });
      assert.equal(asset.status, 200, `${route} references ${url}`);
    }
  });
}

test('an unknown route returns 404', async () => {
  const response = await fetch(`${baseUrl}/no-such-page`);

  assert.equal(response.status, 404);
});
