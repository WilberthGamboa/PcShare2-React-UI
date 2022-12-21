import React from 'react'
import ReactDOM from 'react-dom/client'


import {BrowserRouter} from 'react-router-dom'
import { PcShare } from './PcShare'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PcShare />
    </BrowserRouter>
  </React.StrictMode>,
)
