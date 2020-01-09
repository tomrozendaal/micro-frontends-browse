import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

window.renderBrowse = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId))
}

window.unmountBrowse = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}
