import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './Layout'
import { logInAsLocalDebugUserIfDebugTokenEnabled } from './local-run/localDebugAuth'
import { layoutRoutes } from './local-run/layoutRoutes'

async function initApp() {
  logInAsLocalDebugUserIfDebugTokenEnabled()

  ReactDOM
    .createRoot(document.getElementById(`root`)!)
    .render(
      <React.StrictMode>
        <Layout getPageRoutes={layoutRoutes} />
      </React.StrictMode>,
    )
}

initApp()
