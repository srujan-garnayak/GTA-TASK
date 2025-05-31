// import { useState } from 'react'
import './App.css'
import Community from './components/Community'
import Event from './components/Event'
import Footer from './components/Footer'
import Header from './components/Header'
import Tournament from './components/Tournament'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-700 min-h-screen'>
      <Header />
      <div className='py-20'>
        <Tournament />
        <Community />
        <Event />
      </div>
      <Footer />
    </div>
  )
}

export default App
