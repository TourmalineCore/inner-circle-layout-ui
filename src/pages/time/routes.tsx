import IconTime from '../../assets/icons/icon-time.svg?react'

const DEFAULT_PATH = `/time/tracking`

export const timeSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: DEFAULT_PATH,
    label: `Time Tracker`,
    icon: <IconTime />,
    iconActive: <IconTime />,
  },
]