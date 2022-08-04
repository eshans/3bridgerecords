import artists from "../data/artists.json";
import { useParams, Link } from 'react-router-dom'


function ArtistList() {
  return (
    <div className="content">
      {artists.map((artist, i) => (
        <div className="wrapper" key={i}>
          {artist.name}
        </div>
      ))}

    </div>
  )
}

export default ArtistList