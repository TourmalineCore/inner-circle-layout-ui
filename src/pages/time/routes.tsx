import IconTime from '../../assets/icons/icon-time.svg?react'

const DEFAULT_PATH = `/time`

export const timeSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}/tracking`,
    label: `Time Tracker`,
    icon: <IconTime />,
    iconActive: <IconTime />,
  },
]