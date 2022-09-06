import artists from "../data/artists.json";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Artist() {
  return (
    <Wrapper>
      <div className="content artists">
        {artists.map((artist, i) => (
          <div className="item" key={i}>
            <Link to={`/artist/${artist.id}`}>
              <span className="name">{artist.name} </span>
            </Link>
          </div>
        ))}
      </div>
    </Wrapper >
  )
}

const Wrapper = styled.div`

`
export default Artist
