import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Features from './components/Features'
import Clients from './components/Clients'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <VisionMission />
        <Features />
        <Clients />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

