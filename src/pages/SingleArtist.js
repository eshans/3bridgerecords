import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import artists from '../data/artists.json'
import releases from "../data/releases.json";

function SingleArtist() {
  const { id } = useParams() //finds single artist from array & matches ID
  const artist = artists.find((a) => a.id === +id);
  const { singleimageURL, name, soundcloud, bio } = artist
  const release = releases.filter((b) => b.id === +id);
  const merged = artists.map(itm => ({ ...itm, ...releases.find(item => item.id === itm.id && item) }))

  return (
    <Wrapper>
      <div className="artist-container">
        <div className='item'>

          <div className='image'>
            <img src={singleimageURL} alt={name} />
          </div>
          <div className="info">
            <p className='name'>{name}</p>
            {bio}
          </div>
          <a href={'https://soundcloud.com/' + soundcloud} target="_blank" rel="noreferrer">
            Listen to {name}'s Soundcloud
          </a>
        </div>
      </div>
      <span>
        <Link className='link-back' to="/artists"> Back To Artists</Link>
      </span>

      <div className="matches">
        <h4> Releases by {name} </h4>
        {release.map(release => {
          const { title, imageURL, name } = release;
          return (
            <div className="item" key="id">
              <img className="image" src={imageURL} alt={name} />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
    span a { 
      color:#fff;
    }

    .image {
      width:100px;
    }

    .name {
      font-size:24px;
    }

    .artist-container {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      justify-content: center;
      flex-wrap: nowrap; 
      color:#fff;
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
      margin:0 15px 15px 0
    }

    .info {
      padding: 0 20px 10px 10px;
      margin-right:20px;
    }

    .matches {
      margin-top:1em;
    }
`

export default SingleArtist 