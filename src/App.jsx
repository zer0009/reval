import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Clients from './components/Clients'
import Partners from './components/Partners'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Features />
        <Clients />
        <Partners />
        <Brands />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  )
}

export default App

