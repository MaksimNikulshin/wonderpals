import React from 'react'
import Router from './Router.jsx'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'store/store.js'

import './i18n.js'

import 'styles/app/_reset.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
