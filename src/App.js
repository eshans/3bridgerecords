import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Releases from './pages/Releases'
import SingleRelease from './pages/SingleRelease'
import SingleArtist from './pages/SingleArtist'
import Artists from './pages/Artists'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import './main.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/artists' element={<Artists />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/releases' element={<Releases />} />
            <Route path="/release/:id" element={<SingleRelease />} />
            <Route path='/artist/:id' element={<SingleArtist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}


export default App;
