import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import ComponenteUno from './components/ComponenteUno'
import ComponenteDos from './components/ComponenteDos'


function App() {

  return (
    <div>
      <ComponenteUno telephone={55555555}/>
      <ComponenteDos telephone={66666666}/>
    </div>
  )
}

export default App
