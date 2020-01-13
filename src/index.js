import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './serve.json'

import App from './App'

window.renderBrowse = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId))
}

window.unmountBrowse = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}
