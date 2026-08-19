# inner-circle-layout-ui

### If you develop inside Dev Containers you need
- [VSCode](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

If you open this project in VSCode please install Dev Containers extension and agree to re-open this project's folder in it with installing all the rest of recommended extensions.

## Getting Started

```bash
# run once to install dependencies
npm ci

# to run application
npm run start
```

## Local run with module federation

Plain `npm run start` doesn't serve the federated remote entry file (`assets/inner_circle_layout_ui.js`). This is a `vite-plugin-federation` limitation: it only builds that file during `vite build`, not in the dev server.

To develop layout-ui alongside a host app like books-ui, run:

```bash
npm run start:federation
```

This rebuilds on every change and serves the result on port 4006. There is no hot reload, so refresh the browser manually after each change.

## Run component tests

```bash
npm run cy:component
```