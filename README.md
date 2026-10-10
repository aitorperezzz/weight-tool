# Weight Tool

A small browser tool for defining hierarchical weights, validating that each level sums to 100%, and converting leaf weights into integer values.

The app is served by Express and runs entirely in the browser.

## How it works

- Add top-level categories until they sum to 100%.
- Add subcategories under any category; each group of siblings must also sum to 100%.
- Enter weights as proportions, such as `1/3`, `0.5` or `1`.
- Use auto-generate to split a category into equal items.
- Press **Finalize** to compute leaf weights as normalized integers.

## Docker Compose

Copy or download [docker-compose.yml](docker-compose.yml) into a directory.
It uses the published image `ghcr.io/aitorperezzz/weight-tool:latest`.
From that directory, start the app or update it to the latest published image:

```sh
docker compose up -d --pull always
```

Open <http://localhost:3000>. Change the left side of `3000:3000` to use a
different host port. You only need the Compose file; cloning the repository
is optional.

Stop the app with `docker compose down`.

## Run locally

With Node.js 22 and npm installed, clone the repository and run:

```sh
npm ci
npm start
```

Open <http://localhost:3000>. Run `npm test` to check the server's JavaScript
syntax.

## GitLab CI/CD

Every branch push builds with Buildah and publishes the commit SHA and `latest`
to the local GitLab registry. Only pushes to the default branch (`main` or
`master`) also publish `ghcr.io/aitorperezzz/weight-tool:latest`. Tag pushes and
merge request pipelines do not publish images.

Set `GHCR_TOKEN` as a masked and hidden GitLab CI/CD variable, with expansion
disabled, using a GitHub classic token with `write:packages`. If the variable
is protected, protect the default branch too. After the first publication,
set the GitHub package to **Public** to allow pulls without authentication.
