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
npm run start
```

## Ports

| Service Name               | Dev Container/Codespaces        | IDE        | Docker Compose        |
| :------------------------- | :-----------------------------: | :--------: | :-------------------: |
| inner-circle-layout-ui     |               4500              |    5500    |          6500         |

Which of the first two columns applies to `npm run start` depends on where you run it from. You don't have to switch anything by hand: `vite.config.ts` picks the port by the `LOCAL_WORKSPACE_FOLDER` variable, which the Dev Container sets and a plain IDE on the host doesn't.

`npm run start:federation` is the exception - it always serves on 4500, wherever you run it from, because the port is passed in the `start:federation:serve` script. It has to be fixed: books-ui proxies `/layout` to port 4500 and has no Dev Container branch of its own.

The Docker Compose column is the built image served by nginx, and this is the one host apps use by default - books-ui proxies `/layout` to port 6500. In local-env the port is 30090.

## Local run with module federation

Plain `npm run start` doesn't serve the federated remote entry file (`assets/inner_circle_layout_ui.js`). This is a `vite-plugin-federation` limitation: it only builds that file during `vite build`, not in the dev.

To develop layout-ui alongside a host app like books-ui, run:

```bash
npm run start:federation
```

This rebuilds on every change and serves the result on port 4500, wherever you run it from. There is no hot reload, so refresh the browser manually after each change.

## Run component tests

```bash
npm run cy:component
```