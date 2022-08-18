import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import artists from '../data/artists.json'

function SingleArtist() {
  const { id } = useParams() //finds single artist from array & matches ID
  const artist = artists.find((a) => a.id === +id);  //a.id === id compares a.id of type number to id of type string, which will result false due to the '===' strict operator

  return (
    <Wrapper>
      <div class="artist-container">
        <div className='item'>
          <h3> Artist Info </h3>
          <p>{artist.name}</p>
          <div className='image'>
            <img src={artist.singleimageURL} alt={artist.name} />
          </div>
          <div class="info">
            {artist.bio}
          </div>
        </div>
      </div>
      <a href={'https://soundcloud.com/' + artist.soundcloud} target="_blank" rel="noreferrer">
        Soundcloud
      </a>
      <h3><Link className='link-back' to="/artists"> Back To Artists</Link></h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`

    .artist-container {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      justify-content: center;
      flex-wrap: nowrap; 
    }

    .item {
      background-color: transparent;
      margin: 3px;
      padding: 5px 0 0 5px;
      flex: 1;
    }

    .item img {
      object-fit: center;
      height: 15rem;
      width: 15rem;
      float:left;
      margin-right: 5px;
    }
`

export default SingleArtist 