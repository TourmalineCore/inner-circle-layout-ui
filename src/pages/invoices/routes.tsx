import IconCalculator from '../../assets/icons/icon-calculator.svg?react'

const DEFAULT_PATH = `/invoices`

export const invoicesSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Invoices`,
    icon: <IconCalculator />,
    iconActive: <IconCalculator />,
  },
]