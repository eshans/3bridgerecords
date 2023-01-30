import artists from "../data/artists.json"
import { Link } from "react-router-dom"
import styled from "styled-components"

function Artist() {
	return (
		<Wrapper>
			<h2 className="header">Artists </h2>
			<hr />
			<div className="content artists">
				{artists.map((artist, i) => (
					<div className="item" key={i}>
						<Link to={`/artist/${artist.id}`}>
							<div className="image">
								<img src={artist.imageURL} alt={artist.name} />
							</div>
						</Link>
					</div>
				))}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	img {
		width: 300px;
		height: 300px;
		object-fit: cover;
	}

	.header {
		color: #fff;
	}

	.content.artists {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		flex-wrap: wrap;
		margin: 2rem 0 1rem 0rem;
	}

	.item {
		padding: 2px 5px 5px 10px;
		width: 50%;
	}

	.item a {
		display: flex;
		color: #fff;
		opacity: 0.6;
	}

	.item a:hover {
		opacity: 1;
		transition: 0.3s;
	}

	.name {
		font-size: 2rem;
	}
`
export default Artist
