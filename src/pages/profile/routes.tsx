import IconProfile from '../../assets/icons/icon-profile.svg?react'
import IconProfileActive from '../../assets/icons/icon-profile-active.svg?react'

const DEFAULT_PATH = `/employees/profile`

export const profileSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Profile`,
    icon: <IconProfile />,
    iconActive: <IconProfileActive />,
  },
]