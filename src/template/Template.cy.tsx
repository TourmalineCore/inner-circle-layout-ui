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

  const accessToken = localStorage.getItem(`accessToken`)

  const token = JSON.parse(accessToken!).value

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
