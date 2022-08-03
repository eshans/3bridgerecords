import Navbar from './components/Navbar'
import About from './pages/About'
import Releases from './pages/Releases'
import SingleRelease from './pages/SingleRelease'
import SingleArtist from './pages/SingleArtist'
import Artists from './pages/Artists'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import styled from 'styled-components'
import bg from './images/bg.jpg'
import logo from './images/logo.png'
import Menu from './components/Menu/Menu'
import './main.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Background = styled.div`
  height: 100vh;
  color:black;
`;

const App = () => {
  return (

    <Background>
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
            <Route path='/artist/*' element={<SingleArtist />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
      </div>
    </Background>

  );
}


export default App;
