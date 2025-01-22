import IconCompensations from '../../assets/icons/icon-compensations.svg?react'
import IconCompensationsActive from '../../assets/icons/icon-compensations-active.svg?react'

const DEFAULT_PATH = `/compensations`

export function getRouteForCompensations(permission: string) {
  if (permission === `CanRequestCompensations`) {
    return [
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/my`,
        label: `Compensations`,
        icon: <IconCompensations />,
        iconActive: <IconCompensationsActive />,
      },
    ]
  }

  return [
    {
      isWindowRedirectNecessary: true,
      path: `${DEFAULT_PATH}/all`,
      label: `Compensations`,
      icon: <IconCompensations />,
      iconActive: <IconCompensationsActive />,
    },
  ]
}

export const compensationsSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Compensations`,
    icon: <IconCompensations />,
    iconActive: <IconCompensationsActive />,
    routes: [
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/my`,
        label: `My`,
        iconMini: <IconCompensations />,
      },
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/all`,
        label: `All`,
        iconMini: <IconCompensations />,
      },
    ],
  },
]
