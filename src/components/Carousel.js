import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'


export default function Carousel() {
  let settings = {
    dots: true,
    className: 'sample'
  }

  return (
    <Wrapper>
      <div className="carousel">
        <Slider {...settings} >
          <div><img src='http://placekitten.com/g/800/400' /></div>
          <div><img src='http://placekitten.com/g/800/400' /></div>
          <div><img src='http://placekitten.com/g/800/400' /></div>
        </Slider>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .sample {
    margin-left: auto;
    margin-right: auto;
    width: 800px;
}
  .carousel {
    margin: 1rem;
  }
`