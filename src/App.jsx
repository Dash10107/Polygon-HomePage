import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/layouts/Header'
import CentreImage from './components/CentreImage'
import About from './components/About'
import CentralTabs from './components/CentralAccordian'
import Clients from './components/Clients'
import Statistics from './components/Statistics'
import Footer from './components/layouts/Footer'

function App() {


  return (
    <>
  <Navigation/>
  <CentreImage/>
  <About/>
<CentralTabs/>
<Clients/>
<Statistics/>
<Footer/>
    </>
  )
}

export default App
