import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './components/pages/HomePage'
import ThesesPage from './components/pages/ThesesPage'
import PeoplePage from './components/pages/PeoplePage'
import PublicationsPage from './components/pages/PublicationsPage'
import EventsPage from './components/pages/EventsPage'

const PAGES = {
  home: HomePage,
  theses: ThesesPage,
  people: PeoplePage,
  publications: PublicationsPage,
  events: EventsPage,
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const PageComponent = PAGES[currentPage]

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        <PageComponent />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
