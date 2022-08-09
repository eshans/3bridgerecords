import artists from "../data/artists.json";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Artist() {
  return (
    <Wrapper>
      <div className="content">
        {artists.map((artist, i) => (
          <div className="wrapper" key={i}>
            <Link to={`/artist/${artist.id}`}>
              <h2> {artist.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width:220px
  }

`
export default Artist
