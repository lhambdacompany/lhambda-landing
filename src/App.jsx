import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Rubros from './components/Rubros'
import Proof from './components/Proof'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Rubros />
        <Proof />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
