import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hamburguler from './components/Hamburguler'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(menuOpen)
  return (
    <div className="App">
      {menuOpen && <NavBar />}
      <div className="page"></div>
      <Hamburguler setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default App
