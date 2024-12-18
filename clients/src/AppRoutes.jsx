import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/landingPage"
import About from "./pages/About"
import Header from "./components/Header";
import Footer from "./components/Footer";
function AppRoutes() {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default AppRoutes
