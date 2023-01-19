import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import releases from "../data/releases.json";
import {Link} from 'react-router-dom'
import rel1 from '../images/carousel/aroundsphere.jpg'
import rel2 from '../images/carousel/ricoluv.jpg'



export default function Carousel() {
  let settings = {
    dots: true,
    className: 'sample'
  }

  return (
    
    <Wrapper>
      <div className="carousel">  
        <Slider {...settings} >
          <div><img src={rel1} height="500" width="500"/></div>
          <div><img src={rel2} height="500" width="500" /></div>
          <div><img src='http://placekitten.com/g/500/500' /></div>
        </Slider>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sample {
    margin-left: auto;
    margin-right: auto;
    width: 500px;
}
  .carousel {
    margin: 1rem;
  }
`