import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Services/>
    <Projects/>
  </React.StrictMode>,
)
