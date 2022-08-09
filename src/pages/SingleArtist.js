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
      <h3> Artist Info </h3>
      <div className='name'>{artist.name}
      </div>
      <div className='bio'>{artist.bio}</div>
      <div className='image'><img src={artist.singleimageURL} alt={artist.name} /></div>
      <a href={'https://soundcloud.com/' + artist.soundcloud} target="_blank" rel="noreferrer">
        Soundcloud
      </a>

      <Link className='link-back' to="/artists"> Back To Artists</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .name {
      font-size:2rem;
    }
`;


export default SingleArtist 