import { FunctionComponent, useContext } from 'react'
import AccessBasedOnPemissionsStateContext from '../routes/state/AccessBasedOnPemissionsStateContext'

import { parseJwt } from './utils/utilsForPermissions'
let Token = ``
export const withPrivateRoute = <Type extends Record<string, unknown>>(ComposedComponent: FunctionComponent<Type>, token: string) => function RequireAuthentication(props: Type) {
  Token = token

  const accessBasedOnPemissionsState = useContext(AccessBasedOnPemissionsStateContext)

  if (token) {
    accessBasedOnPemissionsState.checkPermissionFromToken(parseJwt(token).permissions)
  }
  return token ? <ComposedComponent {...props}
    token={token} /> : null
}
// eslint-disable-next-line import/no-default-export
export default Token