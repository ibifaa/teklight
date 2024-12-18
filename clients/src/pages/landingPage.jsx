import About from "../components/About"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
import Contact from "../components/Contact"


function LandingPage() {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <main>
          <Hero/>
          <About/>
          <Services/>
          <Blogs/>
          <Contact/>
        </main>
        <Footer/>
      
    </div>
  )
}

export default LandingPage
