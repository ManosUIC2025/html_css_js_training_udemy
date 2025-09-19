import React from 'react'
import Navbar from './components/navbar/Navbar'
import NavbarClass from './components/navbar_class/NavbarClass'
import NavbarClassTWO from './components/navbar_class/NavbarClassTwo'


const App = () => {
  return (
    <>
      <Navbar />
      <Navbar />
      <NavbarClass />
      <NavbarClassTWO />
    </>
  )
}

export default App