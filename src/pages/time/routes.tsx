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

  if (routes.length === 1) {
    return [
      {
        isWindowRedirectNecessary: routes[0].isWindowRedirectNecessary,
        path: routes[0].path,
        label: routes[0].label === `Tracker` ? `Time Tracker` : routes[0].label,
        icon: <IconTime />,
        iconActive: <IconTime />,
      },
    ]
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