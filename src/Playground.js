import Nav from './components/Nav'
import About from './pages/About'
import Releases from './pages/Releases'
import Artists from './pages/Artists'
import Contact from './pages/Contact'
import styled from 'styled-components'
import bg from './images/bg.jpg'
import logo from './images/logo.png'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom"

const Background = styled.div`
  height: 100vh;
  color:white;
`;



const App = () => {
  const routes = [
    {
      name: "home",
      path: "/",
      component: <About />
    },
    {
      name: "releases",
      path: "/releases",
      component: <Releases />
    },
    {
      name: "Artists",
      path: "/artists",
      component: <Artists />
    },
    {
      name: "Contact",
      path: "/contact",
      component: <Contact />,
      subMenu: [
        {
          id: 1,
          item: "Sub Item 1",
          url: "/"
        },
        {
          id: 2,
          item: "Sub Item 2",
          url: "/"
        },
        {
          id: 3,
          url: "Sub Item 3",
        },
      ],
    }
  ];

  // translate (map) array of navigation objects into jsx
  const routeComponents = routes.map(({ name, path, component, subMenu }) => (
    <Route menu={subMenu} key={name} path={path} element={<h1>{component}</h1>} />
  ));


  return (
    <div className="App">
      <Background>
        <img src={logo} alt="logo" />

        <Router>
          <Nav routes={routes} />
          <Routes >{routeComponents}</Routes>

        </Router>
        {Outlet}
      </Background>
    </div>
  );
}


const styledNav = styled.nav`
      justify-content: space-around;
      margin:auto;
      display:flex;
      background-color:#fff;
`

const Nav = ({ routes }) => {
  const links = routes.map(({ name, path }) => (
    <Link key={name} to={path}>
      {name}
    </Link>
  ));

  return (
    <div
      style={{
        justifyContent: "space-around",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "red"
      }}
    >
      {links}
    </div>
  );
}


export default App;


import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Release from '../components/Release';

function SingleRelease(props) {
  const [release, setRelease] = useState()
  const { id } = useParams()


  useEffect(() => {
    fetch("/src/data/releases.json")
      .then((res) => res.json())
      .then((releases) => release.filter((release) => {
        return release.id === id
      }))
      .then((matched) => setRelease(matched[0]));
  }, []);

  return (
    <>

    </>
  )
}

export default SingleRelease


// const [releases, setReleases] = useState([])
const [currentPage, setCurrentPage] = useState(false)
const [releasesPerPage, setReleasesPerPage] = useState(8)

// //Get index 
const indexOfLastRelease = currentPage * releasesPerPage
const indexofFirstRelease = indexOfLastRelease - releasesPerPage
const currentReleases = releases.slice(indexofFirstRelease, indexOfLastRelease)

console.log(currentReleases)