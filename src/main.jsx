import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'

import CounterProvider from './context/CounterContext.jsx'

import Page from './Page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/page' element={<Page/>}/>
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  </React.StrictMode>,
)
