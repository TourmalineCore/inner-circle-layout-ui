import { LayoutPage } from "../pages/layout/LayoutPage"

export function layoutRoutes() {
  return [
    {
      path: `*`,
      breadcrumb: `Layout page`,
      Component: () => <LayoutPage />,
    },
  ]
}
