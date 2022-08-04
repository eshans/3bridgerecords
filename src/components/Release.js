import React from 'react'
import releases from "../data/releases.json";
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const Release = () => {

  return (
    <Wrapper>
      <div className="release">
        {releases.map((release, i) => (
          <div className="item" key={i}>
            <div className="title"> {release.title}</div>
            <span className="small">Click image for more info </span>
            <Link to={`/release/${release.id}`}>
              <img className="image " src={release.imageURL} alt={release.name} />
            </Link>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .release {
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    flex-wrap: wrap;
  }
  .image {
    max-width: 100%;
    height: auto;
  }
  .small {
    font-size:.9rem;
    font-weight: bold;
  }
`

export default Release