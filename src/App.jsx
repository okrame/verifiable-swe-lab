import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Principles from './components/Principles'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import NetworkBackground from './components/NetworkBackground'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <NetworkBackground scrollY={scrollY} />

      <div className="relative z-10">
        <Hero />
        <About />
        <Principles />
        <Technologies />
        <Footer />
      </div>
    </div>
  )
}

export default App
