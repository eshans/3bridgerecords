import React from 'react'
import { FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/artists',
    text: 'artists',
  },
  {
    id: 4,
    url: '/releases',
    text: 'releases',
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact',
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/3BridgeRecords',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com/3bridge_records',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/channel/UCzkfZhPdUtnvKzWjT4XQ8Tw',
    icon: <FaYoutube />,
  },
  {
    id: 4,
    url: 'https://soundcloud.com/3bridge-records',
    icon: <FaSoundcloud />,
  },
  {
    id: 5,
    url: 'https://open.spotify.com/playlist/5b1rzCipCBEHPVu6kwTQYf?si=5ea0bc5c56b04add',
    icon: <FaSpotify />,
  },
]
