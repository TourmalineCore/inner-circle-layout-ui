import { FunctionComponent, useContext } from 'react'
import AccessBasedOnPemissionsStateContext from '../routes/state/AccessBasedOnPemissionsStateContext'
import { parseJwt } from './utils/utilsForPermissions'

let Token = ``

// eslint-disable-next-line react-refresh/only-export-components
export const withPrivateRoute = <Type extends Record<string, unknown>>(ComposedComponent: FunctionComponent<Type>, getPageRoutes: any, token: string) => function RequireAuthentication(props: Type) {
  Token = token
  const accessBasedOnPemissionsState = useContext(AccessBasedOnPemissionsStateContext)

  if (token) {
    accessBasedOnPemissionsState.checkPermissionFromToken(parseJwt(token).permissions)
  }

  return token
    ? <ComposedComponent
      {...props}
      token={token}
      getPageRoutes={getPageRoutes}
    />
    : null
}

// eslint-disable-next-line import/no-default-export
export default Token