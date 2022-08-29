import React from 'react'
import nyc from '../images/nyc.jpg'
import styled from 'styled-components'


const About = () => {
  return (
    <Wrapper>
      <img src={nyc} alt="nyc" height="400" width="300" className='image' />
      <div className="content">
        3Bridge Records is based in Brooklyn, NY run by founder Greg Cuoco and creative director Eric Shans. The label is a collection of sounds from around the world that push the frontiers of dance music that aren't regimented to any specific micro-genre or style. It connects those who believe that sound, visuals and the landscape that surrounds them define their creative experience and output.
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .image {
    float:left;
    margin-right:20px;
  }

  .content {
   color:#fff;
  }

  @media screen and (max-width: 800px) {
    .image {
      display: none;
    }
  }
`
export default About