import { useState } from 'react'
import './App.css'
import Navigator from './components/Navigator'
import Card from './components/Card'

function App() {
  return (
    <div>
      <Navigator />
        <div class="cardsAppContainer">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="cardsAppContainer">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

  )
}

export default App
