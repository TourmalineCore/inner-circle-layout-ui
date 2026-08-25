# inner-circle-layout-ui

## Dev Container

This repo and its infrastructure tailored for VSCode/GitHub Codespaces Dev Container centric development experience in Docker to achieve better isolation of the environment as well as its cross-platform support out of the box. 

### Prerequisites

1. Install Docker Desktop (Windows, macOS) or Docker Engine (Linux)
2. Install Visual Studio Code.
3. Install all repo's recommended extensions including [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

### Develop inside Dev Container

Open this repo's folder in VSCode/Codespaces, it might immediately propose you to re-open it in a Dev Container or you can click on `Remote Explorer`, find plus button and choose the `Open Current Folder in Container` option and wait when it is ready.

When your Dev Container is ready, the VSCode window will be re-opened. Open a new terminal in this Dev Container which will be executing the commands under this prepared Linux container where we already have all pre-installed and pre-configured development related dependencies.

## Getting Started

```bash
# run once to install dependencies
npm ci

# to run application
npm start
```
Then open http://localhost:4500.

This is the Vite dev server, so it has hot reload - a change in `src` shows up in the browser without a manual refresh. This is the mode to use while working on the layout markup, styles and components. Two things it does not give you:

- **Module federation does not work.** `npm start` never produces the remote entry file, so no host app can consume the layout from this server - see [Local run with module federation](#local-run-with-module-federation).
- **Navigation between services does not work.** Every sidebar button is a plain `<a href="/books">`-style link, not a react-router one, because in a real environment each of those paths belongs to a different service. layout-ui on its own serves nothing at them, so clicking a sidebar button leaves the app and lands on a 404 from the dev server. To click through the sidebar for real you need the whole set of services running, for example in local-env.

## Ports

| Service Name               | Dev Container/Codespaces/IDE    | Docker Compose        |
| :------------------------- | :-----------------------------: | :-------------------: |
| inner-circle-layout-ui     |               4500              |        6500           |

Both `npm run start` and `npm run start:federation` serve at 4500, and it's the same 4500 wherever you start them—from inside the Dev Container, in Codespaces, or from a plain IDE on the host. We assume that you won't need to run an application in both the IDE and the Dev container on the same computer at the same time.

The Docker Compose column is the built image served by nginx, and this is the one host apps use by default - books-ui proxies `/layout` to port 6500. In local-env the port is 30090.

## Local run with module federation

`npm run start` doesn't serve the federated remote entry file (`assets/inner_circle_layout_ui.js`). This is a `vite-plugin-federation` limitation: it creates that file only during `vite build`, and the dev server never runs a build.

So a host app pointed at `npm run start` gets `index.html` back instead of a JS module, the remote fails to load, and the host renders with no layout at all.

To develop layout-ui alongside a host app like books-ui, run:

```bash
npm run start:federation
```

When we run serve inside we want it to show to content immediatelly that is why we run build once first and only after it we run serve and build with watch in parallel so that hot rebuild works. Hot rebuild keeps rebuilding it on every change and serves the result on port 4500. Module federation works, hot reload doesn't. Refresh the browser manually after each change, and give the rebuild a second to finish before you do.

## Run with Docker Compose

This is the production-like way to run it: the image is built by Dockerfile with `npm run build` and served by nginx, exactly as host apps get it by default.

```bash
docker compose up --build
```
Use `--build` whenever the source has changed, otherwise Compose reuses the previously built image. Add `-d` to run it in the background, and stop it with:

```bash
docker compose down
```

Opening http://localhost:6500 directly gives you a broken page, and that is expected rather than a bug. The app is built with `base: /layout`, so `index.html` asks for `/layout/assets/...`, while nginx serves the files at `/assets/...`. The `/layout` prefix is meant to be stripped by whoever proxies to this container - a host app's dev server proxy locally, the ingress rewrite in a cluster. To check the container itself is alive, request an asset without the prefix.

## Run component tests

```bash
npm run cypress:run:component
```
