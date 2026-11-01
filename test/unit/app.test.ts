import assert from 'node:assert/strict';
import http from 'node:http';
import { AddressInfo } from 'node:net';
import path from 'node:path';
import { after, before, test } from 'node:test';

import getApp from '../../src/app';
import personalProjectsService from '../../src/services/personal-projects/personal-projects-service';

const pages = [
  { route: '/', title: 'Erik Hage', },
  { route: '/about-me', title: 'Erik Hage: About Me', },
  { route: '/professional-experience', title: 'Erik Hage: Professional Experience', },
  { route: '/personal-projects', title: 'Erik Hage: Personal Projects', },
  { route: '/red-white-and-brew', title: 'Erik Hage: RW&amp;B', },
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
  server = http.createServer(getApp(path.resolve(__dirname, '../../src')));
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
    assert.ok(html.includes('<meta charset="utf-8"/>'), 'expected a charset');
    assert.ok(html.includes('<meta name="description"'), 'expected a description');
    assert.ok(html.includes(`<meta property="og:url" content="https://theferalrooster.com${route}"/>`));
    assert.equal(html.match(/<h1[ >]/g)?.length, 1, 'expected exactly one h1');
    assert.ok(html.includes(`&copy; ${new Date().getFullYear()} TheFeralRooster`), 'expected the current year');

    const localUrls = new Set(getLocalUrls(html));
    assert.ok(localUrls.size > 0, 'expected the page to reference local URLs');

    for (const url of localUrls) {
      const asset = await fetch(`${baseUrl}${url}`, { method: 'HEAD', });
      assert.equal(asset.status, 200, `${route} references ${url}`);
    }
  });
}

test('an unknown route shows the 404 page', async () => {
  const response = await fetch(`${baseUrl}/no-such-page`);
  const html = await response.text();

  assert.equal(response.status, 404);
  assert.ok(html.includes('<title>Erik Hage: Page Not Found</title>'));
  assert.ok(html.includes('class="navbar'), 'expected the site navigation');
});

test('a failing route shows the 500 page without exposing the error', async (context) => {
  const logged = context.mock.method(console, 'error', () => undefined);
  context.mock.method(personalProjectsService, 'getRandomProject', () => {
    throw new Error('secret failure detail');
  });

  const response = await fetch(`${baseUrl}/`);
  const html = await response.text();

  assert.equal(response.status, 500);
  assert.ok(html.includes('<title>Erik Hage: Something Went Wrong</title>'));
  assert.ok(html.includes('class="navbar'), 'expected the site navigation');
  assert.ok(!html.includes('secret failure detail'), 'the error message reached the page');
  assert.ok(!html.includes('index-handlers'), 'a stack trace reached the page');
  assert.equal(logged.mock.callCount(), 1);
});

for (const route of [ '/about-me', '/personal-projects', ]) {
  test(`${route} doesn't load gallery images until they're shown`, async () => {
    const html = await (await fetch(`${baseUrl}${route}`)).text();
    const thumbnails = html.match(/<img class="[^"]*img-thumbnail[^>]*>/g) ?? [];

    assert.ok(thumbnails.length > 0, 'expected gallery thumbnails');
    assert.ok(thumbnails.every((thumbnail) => thumbnail.includes('loading="lazy"')));
  });
}

test('robots.txt points at a sitemap of every page', async () => {
  const robots = await fetch(`${baseUrl}/robots.txt`);
  const sitemap = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemapUrls = Array.from((await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);

  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /^Sitemap: https:\/\/theferalrooster\.com\/sitemap\.xml$/m);
  assert.equal(sitemap.status, 200);
  assert.deepEqual(sitemapUrls, pages.map(({ route, }) => `https://theferalrooster.com${route}`));
});

test('responses carry the security headers', async () => {
  const { headers, } = await fetch(`${baseUrl}/`);
  const { headers: assetHeaders, } = await fetch(`${baseUrl}/stylesheets/main.css`);

  for (const responseHeaders of [ headers, assetHeaders, ]) {
    assert.equal(responseHeaders.get('x-powered-by'), null);
    assert.equal(responseHeaders.get('x-content-type-options'), 'nosniff');
    assert.equal(responseHeaders.get('strict-transport-security'), null);
    assert.equal(responseHeaders.get('content-security-policy'), null);
    assert.ok(responseHeaders.has('content-security-policy-report-only'));
  }
});
