const DEFAULT_PATH = `/books`

export const booksSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: DEFAULT_PATH,
    label: `Library`,
    routes: [
      {
        isWindowRedirectNecessary: true,
        path: DEFAULT_PATH,
        label: `All Books`,
      },
    ],
  },
]