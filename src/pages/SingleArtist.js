import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function SingleArtist(props) {

  const { id } = useParams()
  return (
    <div>Single Artist page</div>
  )
}


export default SingleArtist 