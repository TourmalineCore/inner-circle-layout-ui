import { ReactComponent as IconIAM } from '../../assets/icons/icon-account-management.svg'

const DEFAULT_PATH = `/account-management`

export const IAMSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    // path: '/',
    label: `IAM`,
    icon: <IconIAM />,
    iconActive: <IconIAM />,
    routes: [
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/accounts`,
        label: `Accounts`,
        iconMini: <IconIAM />,
      },
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/roles`,
        label: `Roles`,
        iconMini: <IconIAM />,
      },
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/tenants`,
        label: `Tenants`,
        iconMini: <IconIAM />,
      },
    ],
  },
]