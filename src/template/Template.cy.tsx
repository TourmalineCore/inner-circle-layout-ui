import { BrowserRouter, Route, Routes } from "react-router-dom"
import Template from "./Template"
import AccessBasedOnPemissionsStateContext from "../routes/state/AccessBasedOnPemissionsStateContext"
import AccessBasedOnPemissionsState from "../routes/state/AccessBasedOnPemissionsState"
import { withPrivateRoute } from "../common/withPrivateRoute"

describe(`Layout`, () => {
  describe(`Render Layout Component`, renderLayoutComponentTests)
  describe(`Render Time Tracker Menu`, renderTimeTrackerMenuTests)
})

function renderLayoutComponentTests() {
  it(`
  GIVEN layout component 
  WHEN render it 
  THEN render sidebar, header and footer
  `, () => {
    const token = `eyJhbGciOiJIUzI1NiJ9.eyJjb3Jwb3JhdGVFbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJwZXJtaXNzaW9ucyI6WyJWaWV3UGVyc29uYWxQcm9maWxlIiwiVmlld0NvbnRhY3RzIiwiVmlld0FjY291bnRzIiwiQ2FuUmVxdWVzdENvbXBlbnNhdGlvbnMiLCJDYW5NYW5hZ2VEb2N1bWVudHMiXSwiZXhwIjoxNzM1MTAyNjc1fQ.dqPeF94lAWePT0IizUwbuQGyN0kzu2dWVBPN_HUg7gQ`

    // mock getPageRoutes function which is a prop of another app
    const mockGetPageRoutes = cy.stub()
      .returns([
        {
          path: `/mock-path`,
          breadcrumb: `Mock Breadcrumb`,
          Component: () => <div>Mock Component</div>,
        },
      ])

    mountComponent({
      token,
      mockGetPageRoutes,
    })

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
}

function renderTimeTrackerMenuTests() {
  it(`
  GIVEN a user with multiple permissions
  WHEN render it
  THEN render sidebar with nested time tracker menu
  `, () => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lSWRlbnRpZmllciI6Im1haWxAbWFpbC5ydSIsImNvcnBvcmF0ZUVtYWlsIjoibWFpbEBtYWlsLnJ1IiwidGVuYW50SWQiOiIxIiwiYWNjb3VudElkIjoiMyIsImVtcGxveWVlSWQiOiIyIiwicGVybWlzc2lvbnMiOlsiQ2FuTWFuYWdlUGVyc29uYWxUaW1lVHJhY2tlciIsIkNhblZpZXdQZXJzb25hbFJlcG9ydCJdLCJleHAiOjE3ODg4NDM1OTJ9.mocked_signature_12345`
    // mock getPageRoutes function which is a prop of another app

    const mockGetPageRoutes = cy.stub()
      .returns([
        {
          path: `/mock-path`,
          breadcrumb: `Mock Breadcrumb`,
          Component: () => <div>Mock Component</div>,
        },
      ])

    mountComponent({
      token,
      mockGetPageRoutes,
    })

    cy
      .getByData(`sidebar-item-has-nested`)
      .should(`exist`)
  })

  it(`
  GIVEN a user with one permissions
  WHEN render it
  THEN render sidebar with not nested time tracker menu
  `, () => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lSWRlbnRpZmllciI6Im1haWxAbWFpbC5ydSIsImNvcnBvcmF0ZUVtYWlsIjoibWFpbEBtYWlsLnJ1IiwidGVuYW50SWQiOiIxIiwiYWNjb3VudElkIjoiMyIsImVtcGxveWVlSWQiOiIyIiwicGVybWlzc2lvbnMiOlsiQ2FuTWFuYWdlUGVyc29uYWxUaW1lVHJhY2tlciJdLCJleHAiOjE3ODg4NDM3NTZ9.mocked_signature_12345`
    // mock getPageRoutes function which is a prop of another app
    const mockGetPageRoutes = cy.stub()
      .returns([
        {
          path: `/mock-path`,
          breadcrumb: `Mock Breadcrumb`,
          Component: () => <div>Mock Component</div>,
        },
      ])

    mountComponent({
      token,
      mockGetPageRoutes,
    })

    cy
      .getByData(`sidebar-item-has-nested`)
      .should(`not.exist`)

    cy
      .getByData(`sidebar-item`)
      .should(`exist`)
  })
}

function mountComponent({
  token,
  mockGetPageRoutes,
}: {
  token: string,
  mockGetPageRoutes: any,
}) {
  const WithPrivateRoute = withPrivateRoute(Template, mockGetPageRoutes, token)

  const routesState = new AccessBasedOnPemissionsState()

  cy.viewport(1280, 800)

  cy.mount(
    <AccessBasedOnPemissionsStateContext.Provider value={routesState}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<WithPrivateRoute
              getPageRoutes={mockGetPageRoutes}
              token={token}
            />}
          />
        </Routes>
      </BrowserRouter>
    </AccessBasedOnPemissionsStateContext.Provider>,
  )
}
