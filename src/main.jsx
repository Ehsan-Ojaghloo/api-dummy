import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route , Routes } from 'react-router-dom'

import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Panel from './Panel.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/panel' element={<Panel/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
