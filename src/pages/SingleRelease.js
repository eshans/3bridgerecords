import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Release from '../components/Release';
import releases from '../data/releases.json'

function SingleRelease(props) {
  const { id } = useParams();
  const release = releases.find((r) => r.id === +id);
  return (
    <>
      <h3> Release details</h3>
      <div> {release.title} </div>
      <div> {release.artist} </div>

      <Link to="/releases"> Back To Releases</Link>
    </>
  )
}

export default SingleRelease