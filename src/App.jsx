// import { useState } from 'react'
import './App.css'
import Community from './components/Community'
import Event from './components/Event'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Tournament from './components/Tournament'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-900 min-h-screen'>
      <Header />
      <div className='py-16 sm:py-18 md:py-18 lg:py-18 xl:py-18'>
        <HeroSection />
        <Tournament />
        <Community />
        <Event />
      </div>
      <Footer />
    </div>
  )
}

export default App
