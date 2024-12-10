import IconProfile from '../../assets/icons/icon-profile.svg'
import IconProfileActive from '../../assets/icons/icon-profile-active.svg'
// import { ReactComponent as IconProfile } from '../../assets/icons/icon-profile.svg'
// import { ReactComponent as IconProfileActive } from '../../assets/icons/icon-profile-active.svg'

const DEFAULT_PATH = `/profile`

export const profileSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Profile`,
    icon: <img src={IconProfile} />,
    iconActive: <img src={IconProfileActive} />,
  },
]