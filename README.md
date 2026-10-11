# george-exercise

## Where it runs

Served on `george.` of kadlec.info, kadlecova.info and kadlec.fi.

`site/` is the built page exactly as it is served: the output of
`npm run build` from this source. It is committed so that deploying needs no
build: every push to `master` hands `site/` over to the server
(`.github/workflows/deploy.yml`), which checks the page and every script and
stylesheet it loads under all three hostnames, and goes back to the release
before if anything does not answer.

An address the page does not know as a file gets `index.html` (the page routes
in the browser); a missing script or stylesheet is still a 404.

After changing the source: `npm run build`, and commit `site/` with it.
`npm start` runs it while developing, `npm test` the test, `npm run lint`
the linter.

The page was first built with Create React App (2020). In October 2026 the
build moved to Vite, because the old toolchain had some 240 known
vulnerabilities. The libraries the page itself is made of stay at the
versions it was built with, except axios and lodash, which had
vulnerabilities of their own. The rebuilt page was compared with the old one
in a browser, step by step, and shows the same.

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
