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

This lints, builds, checks images and runs `test/unit`. `npm ci` also sets up a pre-push hook that
runs it.

### Images

Images belong in `public/images`, and must be JPEG or PNG. Photos can contain GPS coordinates, so
`npm ci` sets up a pre-commit hook that removes metadata from staged images, and refuses images
staged anywhere else.
