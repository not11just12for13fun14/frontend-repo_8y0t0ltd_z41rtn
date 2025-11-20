import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
