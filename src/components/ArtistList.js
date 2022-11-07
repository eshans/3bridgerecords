import artists from "../data/artists.json";
import { useParams, Link } from 'react-router-dom'
import styled from "styled-components";


function ArtistList() {
  return (
    <Wrapper>
      <div class="artist-list">
        <h3>Artist List</h3>
        {artists.map((artist, i) => (
          <span className="name" key={i}>
            {artist.name}
          </span>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;

  .artist-list {
    font-size:1rem;
  }
  .name {
    display: flex;
    align-items: right;
  }
`

export default ArtistList