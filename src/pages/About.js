import React from 'react'
import styled from 'styled-components'
import Carousel from '../components/Carousel'


const About = () => {
  return (
    <>
      <Carousel />
      <Wrapper>
        <div className="content">
          <p>3Bridge Records is based in Brooklyn, NY run by founder Greg Cuoco and creative director Eric Shans. The label is a collection of sounds from around the world that push the frontiers of dance music that aren't regimented to any specific micro-genre or style. It connects those who believe that sound, visuals and the landscape that surrounds them define their creative experience and output.
          </p>
          <p>
            We've curated all types of sounds - everything from deep, groovy, melodic house, to harder warehouse techno sounds and everything in between and has released material from established artists such as Rick Wade, Riccicomoto, and Sleepy & Boo.
          </p>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .image {
    float:left;
    margin-right:20px;
  }

  .content {
   color:#fff;
   margin-left:3.5rem;
  }

  @media screen and (max-width: 800px) {
    .image {
      display: none;
    }
  }
`
export default About