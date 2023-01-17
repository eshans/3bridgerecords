import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import artists from '../data/artists.json'
import releases from "../data/releases.json";

function SingleArtist() {
  const { id } = useParams() //finds single artist from array & matches ID
  const artist = artists.find((a) => a.id === +id)
  //finds ArtistID from Artists then matches any item that has the same value from the Releases array
  const releaseList = releases.filter((b) => b.artistID === artist.artistID)
  const { singleimageURL, name, soundcloud, bio } = artist

  return (
    <Wrapper>
      <div className="artist-container">
        <div className="item">
          <div className="image">
            <img className="artist" src={singleimageURL} alt={name} />
          </div>
          <div className="description">
            <h3 className="name">
              {name}
            </h3>
            <p className="bio">
              {bio}
            </p>
          </div>
        </div>
      </div>
      <div className="holder">
      <span>
        <a href={'https://soundcloud.com/' + soundcloud} target="_blank" rel="noreferrer">
          Listen to {name}'s Soundcloud
        </a>
        <p>
          <Link className="link-back" to="/artists"> Back To Artists</Link>
        </p>
      </span>
      <h4 className="section-header"> Releases by {name} </h4>
      <div className="matches">
        {releaseList.map(release => {
          const { imageURL, name, id, buy } = release;
          return (
            <div className="item" key={id}>
              <a href={buy} target="_blank" rel="noreferrer">
                <img className="image" src={imageURL} alt={name} />
              </a>
            </div>
          )
        })}
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
    a { 
      color:#fff;
      font-weight:bold;
    }

    .image {
      width:200px;
    }

    .name {
      font-size:24px;
    }

    .bio {
      color:#fff;
      font-size: 1em;
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
      margin: 3px 10px 10px 10px;
      padding: 5px 0 0 5px;      
      align-self: stretch;
    }

    .item .artist {
      object-fit: center;
      max-width:400px;
      float:left;
      margin:0 15px 15px 0;
      max-height:70vh;
    }

    .holder {
      margin-left:15px;
    }

    .section-header {
      color:hsl(211, 27%, 70%);
    }

    .info {
      padding: 0 20px 10px 10px;
      margin-right:20px;
    }

    .matches {
      margin-top:1em;
      display: flex;
      flex-direction: row;
      justify-content: left;
    }

    .matches .image {
      display: flex;
      align-items: left;
    }
`

export default SingleArtist 