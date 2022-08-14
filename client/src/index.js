import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import {
  Authentication,
  CreateNew,
  Styleguide,
  Dashboard,
} from './views/pages/Pages'
import store from './data/state/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/auth"
            element={<Authentication type="existing" title="Welcome back!" />}
          />
          <Route
            path="/auth/new"
            element={<Authentication type="new" title="Glad to have you!" />}
          />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/create-vendor"
            element={<CreateNew type="vendor" />}
          />
          <Route
            path="/dashboard/create-organizer"
            element={<CreateNew type="organizer" />}
          />
          <Route
            path="/dashboard/create-event"
            element={<CreateNew type="event" />}
          />
        </Route>
        <Route path="/styleguide" element={<Styleguide />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)
