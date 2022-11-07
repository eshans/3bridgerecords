import React from 'react'
import styled from 'styled-components'
import Artist from '../components/Artist'


const Artists = () => {
  return (
    <Wrapper>
      <Artist />
    </Wrapper >
  )
}

const Wrapper = styled.div`
  .artist-page-container {
      color:#fff;
  }
`

export default Artists