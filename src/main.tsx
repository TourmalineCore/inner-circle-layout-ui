import './styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
// import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from './theme/themeContext'
import App from './App'
import { authService } from './common/authService'
// import { refreshTokenAndSubscribe } from './common/api/refreshByInterval';

declare global {
  // this makes TS errors go away https://stackoverflow.com/a/56458070
  interface Window {
    __ENV__: {
      API_ROOT: string,
      API_ROOT_AUTH: string,
    },
  }
}

async function initApp() {
  // await refreshTokenAndSubscribe()

  ReactDOM
    .createRoot(document.getElementById(`root`)!)
    .render(
      <React.StrictMode>
        <authService.AuthProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </authService.AuthProvider>
      </React.StrictMode>,
    )
}

initApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();