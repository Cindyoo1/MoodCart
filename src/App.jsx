import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#82CF91', minHeight: '100vh', color: 'white' }}>

      <NavBar />

      <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center', color: 'black' }}>
        <h1>MoodCart</h1>
        <p>A reflective spending awareness app</p>
      </div>


    </div>
  )
}

export default App
