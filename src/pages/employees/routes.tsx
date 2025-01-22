import IconEmployees from '../../assets/icons/icon-employees.svg?react'
import IconEmployeesActive from '../../assets/icons/icon-employees-active.svg?react'

const DEFAULT_PATH = `/employees`

export const employeesSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Employees`,
    icon: <IconEmployees />,
    iconActive: <IconEmployeesActive />,
  },
]