export function layoutRoutes() {

  return [
    {
      path: `*`,
      breadcrumb: `Layout page`,
      Component: () => <div>Layout page</div>,
    },
  ]
}
