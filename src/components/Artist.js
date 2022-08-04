import artists from "../data/artists.json";
import { Link } from 'react-router-dom';

function Artist() {
  return (
    <div className="content">
      {artists.map((artist, i) => (
        <div className="wrapper" key={i}>
          <h2> {artist.name}</h2>
          <Link to={`/artist/${artist.id}`}>
            <img src={artist.imageURL} alt={artist.name} />
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Artist
