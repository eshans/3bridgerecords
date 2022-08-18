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
              <h3> {artist.name}</h3>
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

  .content.artists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    text-transform: uppercase;
}

  .item {
    border: 1px solid #000;
    padding:2px 5px 5px 10px;
    width:30%;
    
  }

  .item a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

  }

`
export default Artist
