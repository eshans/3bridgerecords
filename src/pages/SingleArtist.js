import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import artists from '../data/artists.json'
import releases from "../data/releases.json";

function SingleArtist() {
  const { id } = useParams() //finds single artist from array & matches ID
  const artist = artists.find((a) => a.id === +id);
  const release = releases.filter((b) => b.id === +id);
  const merged = artists.map(itm => ({ ...itm, ...releases.find(item => item.id === itm.id && item) }))

  console.log(merged)

  return (
    <Wrapper>
      <div className="artist-container">
        <div className='item'>
          <h3> Artist Info </h3>
          <p>{artist.name}</p>
          <div className='image'>
            <img src={artist.singleimageURL} alt={artist.name} />
          </div>
          <div className="info">
            {artist.bio}
          </div>
        </div>
      </div>
      <a href={'https://soundcloud.com/' + artist.soundcloud} target="_blank" rel="noreferrer">
        Soundcloud
      </a>
      <h3>
        <Link className='link-back' to="/artists"> Back To Artists</Link>
      </h3>
      <h4> Releases by this artist </h4>
      <div className="matches">
        {release.map(release => {
          // here you can display any part of each release
          return (
            <div className="item" key="id">
              {release.title}
              <img src={release.imageURL} alt={artist.name} />
            </div>
          )
        })}
      </div>
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
      align-self: stretch;
    }

    .item img {
      object-fit: center;
      height: 15rem;
      width: 15rem;
      float:left;
      margin-right: 20px;
      
    }

    .info {
      padding: 0 20px 10px 10px;
      margin-right:20px;
    }
`

export default SingleArtist 