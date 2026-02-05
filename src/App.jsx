import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App
