import { useState } from 'react'
import releases from "../data/releases.json";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../main.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
const Release = ({ scrollPosition }) => {

  return (
    <Wrapper>
      <div className="release fadein">
        {releases.map((release, i) => (
          <div className="item" key={i}>
            <Link to={`/release/${release.id}`}>
              <img className="image border" src={release.imageURL} alt={release.name} />
            </Link>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .release {
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      flex-wrap: wrap;
      margin-bottom:1rem;
    }

    .item {
      margin-bottom:2rem;
    }

    h4 {
      margin-bottom:.3rem;
      padding:0;
    }

   .fadein img{
      opacity:0.8;
      transition: 1s ease;
    }

    .fadein img:hover{
      opacity:1;
      transition: 1s ease;
      border:solid 2px var(--clr-grey-8);
    }
    
    .small {
      font-size:.9rem;
      font-weight: bold;
    }
  
    .border {
      display: grid;
      place-items: center;
      min-height: 200px;
      border:solid 2px var(--clr-grey-3);
      padding: .5rem;
    }

    .linear-repeating {
      border-width: 3px;
      border-image: repeating-linear-gradient(45deg, gray, black 15%) 1;
    } 
`

export default Release