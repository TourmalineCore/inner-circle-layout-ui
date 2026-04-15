import IconTime from '../../assets/icons/icon-time.svg?react'
import { Permission } from '../../routes/state/AccessBasedOnPemissionsState'

const DEFAULT_PATH = `/time`

export function getRouteForTime(accessPermissions: Map<keyof typeof Permission, boolean>) {
  const routes = []

  if (accessPermissions.get(`CanManagePersonalTimeTracker`)) {
    routes.push({
      isWindowRedirectNecessary: true,
      path: `${DEFAULT_PATH}/tracking`,
      label: `Tracker`,
    })
  }

  if (accessPermissions.get(`CanViewPersonalReport`)) {
    routes.push({
      isWindowRedirectNecessary: true,
      path: `${DEFAULT_PATH}/personal-report`,
      label: `Personal Report`,
    })
  }

  return [
    {
      isWindowRedirectNecessary: true,
      path: `${DEFAULT_PATH}`,
      label: `Time Tracker`,
      icon: <IconTime />,
      iconActive: <IconTime />,
      routes: routes,
    },
  ]
}