# george-exercise

## Where it runs

Served on `george.` of kadlec.info, kadlecova.info and kadlec.fi.

`site/` is the built page exactly as it is served: the output of `yarn build`
from this source (checked in October 2026 — the sources named inside the
build's source maps are identical to `src/`). It is committed so that
deploying needs no build — the toolchain is from 2020 (react-scripts 3.4.1,
node-sass 4) and wants a Node.js of that time. Every push to `master` hands
`site/` over to the server (`.github/workflows/deploy.yml`), which checks the
page and every script and stylesheet it loads under all three hostnames, and
goes back to the release before if anything does not answer.

An address the page does not know as a file gets `index.html` (the page routes
in the browser); a missing script or stylesheet is still a 404.

After changing the source: `yarn build`, replace the contents of `site/` with
those of `build/`, and commit both.

`deploy/` holds what the server needs to know: the hostnames (`site.conf`),
the key releases are handed over with (`deploy.pub`) and the server's host key
(`known_hosts`). That key can do one thing: send a release of this page.
