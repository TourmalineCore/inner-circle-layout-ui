import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { withPrivateRoute } from './common/withPrivateRoute'
import Template from './template/Template'
import AccessBasedOnPemissionsState from './routes/state/AccessBasedOnPemissionsState'
import AccessBasedOnPemissionsStateContext from './routes/state/AccessBasedOnPemissionsStateContext'
import { ThemeProvider } from './theme/themeContext'
import { useMemo } from 'react'

// eslint-disable-next-line import/no-default-export
export default function Layout({
  getPageRoutes,
}: {
  getPageRoutes: any,
}) {
  const accessToken = localStorage.getItem(`accessToken`)
  const token = JSON.parse(accessToken!).value

  const WithPrivateRoute = withPrivateRoute(Template, getPageRoutes, token)

  const routesState = useMemo(
    () => new AccessBasedOnPemissionsState(),
    [],
  )

  return (
    <ThemeProvider>
      <AccessBasedOnPemissionsStateContext.Provider value={routesState}>
        <BrowserRouter future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
          <Routes>
            <Route
              path="/*"
              element={<WithPrivateRoute
                getPageRoutes={getPageRoutes}
                token={token}
              />}
            />
          </Routes>
        </BrowserRouter>
      </AccessBasedOnPemissionsStateContext.Provider>
    </ThemeProvider>
  )
}
