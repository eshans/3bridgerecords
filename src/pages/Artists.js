import React from 'react'
import styled from 'styled-components'
import Artist from '../components/Artist'

function Artists() {
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

  img {
    width:220px
  }

  .content.artists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    text-transform: uppercase;
    align-items: left;
    margin:10px 50px;
  }

  .item {
    padding:2px 5px 5px 10px;
    width:50%;
  }

  .item a {
    display: flex;
    color:#fff;
    opacity: 0.6;
  }

  .item a:hover {
    opacity: 1;
    transition: 0.3s;
  }

  .name {
    font-size: 2rem;
  }
  @media screen and (max-width: 800px) {
    .image {
      display: none;
    }

    .content.artists {
      margin-left:10px
    }

    .name {
    font-size: 1rem;
  }
    
  }
`

export default Artists