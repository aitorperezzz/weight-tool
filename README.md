# Weight Tool

A small browser tool for defining hierarchical weights, validating that each level sums to 100%, and converting leaf weights into integer values.

The app is served by Express and runs entirely in the browser.

## Run Locally

Install dependencies:

```sh
npm install
```

Start the server:

```sh
npm start
```

Open:

```text
http://localhost:3000
```

## Docker

Build and run locally:

```sh
docker build -t weight-tool .
docker run --rm -p 3000:3000 weight-tool
```

## Docker Compose

For local development:

```sh
docker compose up -d --build
```

Use a different image name when deploying from a registry:

```sh
IMAGE=registry.example.com/group/weight-tool:latest docker compose up -d
```

Stop the service:

```sh
docker compose down
```

## GitLab CI

The pipeline builds the container image with Buildah on pushes to `main` and pushes two tags to the GitLab Container Registry:

```text
$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA
$CI_REGISTRY_IMAGE:latest
```

This repo assumes an HTTP registry in a private homelab, so `REGISTRY_TLS_VERIFY` is set to `false`.

## Usage

- Add top-level categories until they sum to 100%.
- Add subcategories under any category; each group of siblings must also sum to 100%.
- Use auto-generate to split a category into equal items.
- Press Finalize to compute leaf weights as normalized integers.
