import IconCompensations from '../../assets/icons/icon-compensations.svg'
import IconCompensationsActive from '../../assets/icons/icon-compensations-active.svg'
// import { ReactComponent as IconCompensations } from '../../assets/icons/icon-compensations.svg'
// import { ReactComponent as IconCompensationsActive } from '../../assets/icons/icon-compensations-active.svg'

const DEFAULT_PATH = `/compensations`

export function getRouteForCompensations(permission: string) {
  if (permission === `CanRequestCompensations`) {
    return [
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/my`,
        label: `Compensations`,
        icon: <img src={IconCompensations} />,
        iconActive: <img src={IconCompensationsActive} />,
      },
    ]
  }

  return [
    {
      isWindowRedirectNecessary: true,
      path: `${DEFAULT_PATH}/all`,
      label: `Compensations`,
      icon: <img src={IconCompensations} />,
      iconActive: <img src={IconCompensationsActive} />,
    },
  ]
}

export const compensationsSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Compensations`,
    icon: <img src={IconCompensations} />,
    iconActive: <img src={IconCompensationsActive} />,
    routes: [
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/my`,
        label: `My`,
        iconMini: <img src={IconCompensations} />,
      },
      {
        isWindowRedirectNecessary: true,
        path: `${DEFAULT_PATH}/all`,
        label: `All`,
        iconMini: <img src={IconCompensations} />,
      },
    ],
  },
]

export const compensationPersonalRoutes = [
  {
    path: `${DEFAULT_PATH}/my`,
    breadcrumb: `My Compensations`,
    // Component: CompensationsPersonalPage,
    Component: <div>CompensationsPersonalPage</div>,
  },
  {
    path: `${DEFAULT_PATH}/`,
    breadcrumb: `Compensations`,
    Component: <div>CompensationsPage</div>,
  },
]

export const compensationAllRoutes = [
  {
    path: `${DEFAULT_PATH}/all`,
    breadcrumb: `All Compensations`,
    Component: <div>AllCompensationsPage</div>,
  },
  {
    path: `${DEFAULT_PATH}/`,
    breadcrumb: `Compensations`,
    Component: <div>CompensationsPage</div>,
  },
]