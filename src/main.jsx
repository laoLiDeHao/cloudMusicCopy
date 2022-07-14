import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
// import './font_3514198_iq80xr205ja/'
import 'antd/dist/antd.less'
import BaseRouter from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>
)
