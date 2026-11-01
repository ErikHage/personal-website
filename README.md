# personal-website

Stuff about me

### Run locally

Requires Node 24 or newer.

```bash
npm ci
npm run dev
```

served on http://localhost:8001

override with .env file:

`PORT=XXXX`

### Test

```bash
npm test
```

This lints, builds and runs `test/unit`. `npm ci` also sets up a pre-push hook that runs it.
