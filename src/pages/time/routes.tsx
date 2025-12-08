const DEFAULT_PATH = `/time`

export const timeSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: DEFAULT_PATH,
    label: `Time tracker`,
    routes: [
      {
        isWindowRedirectNecessary: true,
        path: DEFAULT_PATH,
        label: `Time tracker`,
      },
    ],
  },
]