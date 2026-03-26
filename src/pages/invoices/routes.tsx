import IconTime from '../../assets/icons/icon-time.svg?react'

const DEFAULT_PATH = `/invoices`

export const invoicesSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Invoices`,
    icon: <IconTime />,
    iconActive: <IconTime />,
  },
]