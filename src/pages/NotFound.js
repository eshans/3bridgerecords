import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className='content'>
      Page Not Found
      <Link to="/"> Back to Home </Link>
    </div>
  )
}
