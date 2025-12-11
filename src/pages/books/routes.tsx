import IconBooks from '../../assets/icons/icon-books.svg?react'

const DEFAULT_PATH = `/books`

export const booksSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: DEFAULT_PATH,
    label: `Library`,
    icon: <IconBooks />,
    iconActive: <IconBooks />,
    routes: [
      {
        isWindowRedirectNecessary: true,
        path: DEFAULT_PATH,
        label: `All Books`,
      },
    ],
  },
]