import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Release from '../components/Release';
import releases from '../data/releases.json'
import styled from 'styled-components'


function SingleRelease(props) {
  const { id } = useParams();
  //r.id === id compares r.id of type number to id of type string, which will result false due to the '===' strict operator so +id converts
  const release = releases.find((r) => r.id === +id);

  return (
    <Wrapper>
      <div className='release-container'>
        <div className='item'>
          <span className='title'>{release.title}</span>
          <span className='artist'>{release.artist} </span>
          <img src={release.imageURL} className='image' alt={release.title} />
          <p className='description'> {release.description} </p>
          <div className='buy'> {release.buy}</div>
          <div>
            <Link to="/releases"> Back To Releases</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

    .release-container {
      display: flex;
    }

    .item {
 
      margin: 3px;
      padding: 5px 0 0 5px;
    
    }
    .item img {
      float:left;
      margin-right: 20px;
    }

    .info {
      padding: 0 20px 10px 10px;
      margin-right:20px;
    }
`

export default SingleRelease