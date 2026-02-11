import { profileSidebarRoutes } from '../pages/profile/routes'
import { SidebarRoutesProps } from '../types'
import { employeesSidebarRoutes } from '../pages/employees/routes'
import { Permission } from './state/AccessBasedOnPemissionsState'
import { IAMSidebarRoutes, roleSidebarRoutes, accountSidebarRoutes, tenantSidebarRoutes } from '../pages/iam/routes'
import { compensationsSidebarRoutes, getRouteForCompensations } from '../pages/compensations/routes'
import { documentsSidebarRoutes } from '../pages/documents/routes'
import { booksSidebarRoutes } from '../pages/books/routes'
import { timeSidebarRoutes } from '../pages/time/routes'

export function getSidebarRoutes(accessPermissions: Map<keyof typeof Permission, boolean>) {
  const routes: SidebarRoutesProps[] = []

  const copyAccountManagement = {
    ...IAMSidebarRoutes,
  }

  if (accessPermissions.get(`ViewPersonalProfile`)) {
    routes.push(...profileSidebarRoutes)
  }

  if (accessPermissions.get(`ViewContacts`) || accessPermissions.get(`ViewSalaryAndDocumentsData`)) {
    routes.push(...employeesSidebarRoutes)
  }

  if (accessPermissions.get(`CanRequestCompensations`) && accessPermissions.get(`CanManageCompensations`)) {
    routes.push(...compensationsSidebarRoutes)
  }

  if (accessPermissions.get(`CanRequestCompensations`) && !accessPermissions.get(`CanManageCompensations`)) {
    routes.push(...getRouteForCompensations(`CanRequestCompensations`))
  }

  if (accessPermissions.get(`CanManageCompensations`) && !accessPermissions.get(`CanRequestCompensations`)) {
    routes.push(...getRouteForCompensations(`CanManageCompensations`))
  }

  if (accessPermissions.get(`CanManageDocuments`)) {
    routes.push(...documentsSidebarRoutes)
  }

  if (accessPermissions.get(`CanViewBooks`)) {
    routes.push(...booksSidebarRoutes)
  }

  if (accessPermissions.get(`CanManagePersonalTimeTracker`)) {
    routes.push(...timeSidebarRoutes)
  }

  if (accessPermissions.get(`ViewAccounts`) && accessPermissions.get(`ViewRoles`) && accessPermissions.get(`CanManageTenants`)) {
    copyAccountManagement.routes = [
      accountSidebarRoutes,
      roleSidebarRoutes,
      tenantSidebarRoutes,
    ]

    routes.push(copyAccountManagement)

    return routes
  }

  if (accessPermissions.get(`ViewAccounts`)) {
    copyAccountManagement.routes = [
      accountSidebarRoutes,
    ]

    routes.push(copyAccountManagement)
    return routes
  }

  if (accessPermissions.get(`ViewRoles`)) {
    copyAccountManagement.routes = [
      roleSidebarRoutes,
    ]

    routes.push(copyAccountManagement)

    return routes
  }

  if (accessPermissions.get(`CanManageTenants`)) {
    copyAccountManagement.routes = [
      tenantSidebarRoutes,
    ]

    routes.push(copyAccountManagement)

    return routes
  }

  return routes
}
