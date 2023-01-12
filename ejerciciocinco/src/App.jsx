import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import ComponenteUno from './components/ComponenteUno'
import ComponenteDos from './components/ComponenteDos'


function App(prop) {

  return (
    <div>
      <ComponenteUno text="test1"/>
      <ComponenteDos text="test2"/>
    </div>
  )
}

export default App
