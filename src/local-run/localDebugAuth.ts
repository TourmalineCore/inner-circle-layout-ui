import { Permission } from '../routes/state/AccessBasedOnPemissionsState'

const ACCESS_TOKEN_STORAGE_KEY = `accessToken`

const LOCAL_DEBUG_PERMISSIONS: Array<keyof typeof Permission> = Object.keys(Permission) as Array<keyof typeof Permission>

export function logInAsLocalDebugUserIfDebugTokenEnabled() {
  if (import.meta.env.VITE_DISABLE_DEBUG_TOKEN !== `false`) {
    return
  }

  const header = btoa(JSON.stringify({
    alg: `none`,
    typ: `JWT`,
  }))

  const payload = btoa(JSON.stringify({
    corporateEmail: `ddev@example.com`,
    permissions: LOCAL_DEBUG_PERMISSIONS,
  }))

  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, JSON.stringify({
    value: `${header}.${payload}.`,
  }))
}
