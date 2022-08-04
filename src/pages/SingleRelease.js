import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Release from '../components/Release';
import releases from '../data/releases.json'
import artists from '../data/artists.json'


function SingleRelease(props) {
  const { id } = useParams();
  //r.id === id compares r.id of type number to id of type string, which will result false due to the '===' strict operator so +id converts
  const release = releases.find((r) => r.id === +id);


  return (
    <div className='content'>
      <h3> Release details</h3>
      <div className='title'> {release.title} </div>
      <div className='artist'>{release.artist} </div>
      <div className='description'> {release.description} </div>
      <img src={release.imageURL} className='image' alt={release.title} />
      <div className='buy'> {release.buy}</div>
      <div>
        <Link to="/releases"> Back To Releases</Link>
      </div>
    </div>
  )
}

export default SingleRelease