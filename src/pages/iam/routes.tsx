// import { ReactComponent as IconIAM } from '../../assets/icons/icon-iam.svg'
import IconIAM from '../../assets/icons/icon-iam.svg'

const DEFAULT_PATH = `/account-management`

export const accountSidebarRoutes = {
  isWindowRedirectNecessary: true,
  path: `${DEFAULT_PATH}/accounts`,
  label: `Accounts`,
  iconMini: <img src={IconIAM} />,
}

export const roleSidebarRoutes = {
  isWindowRedirectNecessary: true,
  path: `${DEFAULT_PATH}/roles`,
  label: `Roles`,
  iconMini: <img src={IconIAM} />,
}

export const tenantSidebarRoutes = {
  isWindowRedirectNecessary: true,
  path: `${DEFAULT_PATH}/tenants`,
  label: `Tenants`,
  iconMini: <img src={IconIAM} />,
}

export const IAMSidebarRoutes: {
  path: string,
  label: string,
  icon: JSX.Element,
  iconActive: JSX.Element,
  routes: {
    path: string,
    label: string,
    iconMini: JSX.Element,
  }[],
} = {
  // isWindowRedirectNecessary: true,
  // path: `${DEFAULT_PATH}`,
  path: `/`,
  label: `IAM`,
  icon: <img src={IconIAM} />,
  iconActive: <img src={IconIAM} />,
  routes: [],
}