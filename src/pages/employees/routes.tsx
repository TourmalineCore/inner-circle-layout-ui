import IconEmployees from '../../assets/icons/icon-employees.svg'
import IconEmployeesActive from '../../assets/icons/icon-employees-active.svg'
// import { ReactComponent as IconEmployees } from '../../assets/icons/icon-employees.svg'
// import { ReactComponent as IconEmployeesActive } from '../../assets/icons/icon-employees-active.svg'

const DEFAULT_PATH = `/employees`

export const employeesSidebarRoutes = [
  {
    isWindowRedirectNecessary: true,
    path: `${DEFAULT_PATH}`,
    label: `Employees`,
    icon: <img src={IconEmployees} />,
    iconActive: <img src={IconEmployeesActive} />,
  },
]