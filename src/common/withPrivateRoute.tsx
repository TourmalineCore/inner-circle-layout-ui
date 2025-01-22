import { FunctionComponent, useContext } from 'react'
import AccessBasedOnPemissionsStateContext from '../routes/state/AccessBasedOnPemissionsStateContext'
import { parseJwt } from './utils/utilsForPermissions'

export const TODO_TOKEN: string = `eyJhbGciOiJIUzI1NiJ9.eyJjb3Jwb3JhdGVFbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJwZXJtaXNzaW9ucyI6WyJWaWV3UGVyc29uYWxQcm9maWxlIiwiVmlld0NvbnRhY3RzIiwiVmlld0FjY291bnRzIiwiQ2FuUmVxdWVzdENvbXBlbnNhdGlvbnMiLCJDYW5NYW5hZ2VEb2N1bWVudHMiXSwiZXhwIjoxNzM1MTAyNjc1fQ.dqPeF94lAWePT0IizUwbuQGyN0kzu2dWVBPN_HUg7gQ`

export const withPrivateRoute = <Type extends Record<string, unknown>>(ComposedComponent: FunctionComponent<Type>) => function RequireAuthentication(props: Type) {
  // TODO: after connect with other services we will get token as prop
  // const [
  //   token,
  // ] = TODO_TOKEN

  const accessBasedOnPemissionsState = useContext(AccessBasedOnPemissionsStateContext)

  if (TODO_TOKEN) {
    accessBasedOnPemissionsState.checkPermissionFromToken(parseJwt(TODO_TOKEN).permissions)
  }
  return TODO_TOKEN ? <ComposedComponent {...props} /> : null
}
