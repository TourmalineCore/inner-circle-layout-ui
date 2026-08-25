import { Permission } from '../routes/state/AccessBasedOnPemissionsState'

const ACCESS_TOKEN_STORAGE_KEY = `accessToken`

const ALL_PERMISSIONS: Array<keyof typeof Permission> = Object.keys(Permission) as Array<keyof typeof Permission>

export function logInAsLocalDebugUserIfDebugTokenEnabled() {
  if (import.meta.env.VITE_DISABLE_DEBUG_TOKEN !== `false`) {
    return
  }

  // btoa base64-encodes a string, this is how JWT segments are encoded
  const header = btoa(JSON.stringify({
    alg: `none`,
    typ: `JWT`,
  }))

  // this is the payload/claims segment, the part the app actually reads
  // corporateEmail for display, permissions for access checks
  const payload = btoa(JSON.stringify({
    corporateEmail: `ddev@example.com`,
    permissions: ALL_PERMISSIONS,
  }))

  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, JSON.stringify({
    value: `${header}.${payload}.`,
  }))
}
