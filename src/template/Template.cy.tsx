import { BrowserRouter, Route, Routes } from "react-router-dom"
import Template from "./Template"
import AccessBasedOnPemissionsStateContext from "../routes/state/AccessBasedOnPemissionsStateContext"
import AccessBasedOnPemissionsState from "../routes/state/AccessBasedOnPemissionsState"
import { withPrivateRoute } from "../common/withPrivateRoute"

describe(`Layout`, () => {
  it(`
  GIVEN layout component 
  WHEN render it 
  THEN render sidebar, header and footer
  `, () => {
    mountComponent()

    cy
      .getByData(`template-sidebar`)
      .should(`exist`)

    cy
      .getByData(`template-panel-top`)
      .should(`exist`)

    cy
      .getByData(`template-panel-bottom`)
      .should(`exist`)
  })
})

function mountComponent() {

  const token = `eyJhbGciOiJIUzI1NiJ9.eyJjb3Jwb3JhdGVFbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJwZXJtaXNzaW9ucyI6WyJWaWV3UGVyc29uYWxQcm9maWxlIiwiVmlld0NvbnRhY3RzIiwiVmlld0FjY291bnRzIiwiQ2FuUmVxdWVzdENvbXBlbnNhdGlvbnMiLCJDYW5NYW5hZ2VEb2N1bWVudHMiXSwiZXhwIjoxNzM1MTAyNjc1fQ.dqPeF94lAWePT0IizUwbuQGyN0kzu2dWVBPN_HUg7gQ`

  const WithPrivateRoute = withPrivateRoute(Template, token)

  const routesState = new AccessBasedOnPemissionsState()

  cy.viewport(1280, 800)

  cy.mount(
    <AccessBasedOnPemissionsStateContext.Provider value={routesState}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<WithPrivateRoute token={token} />}
          />
        </Routes>
      </BrowserRouter>
    </AccessBasedOnPemissionsStateContext.Provider>,
  )
}
