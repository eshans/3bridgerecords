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
		text-align: center;
	}

	.content.artists {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px);
		gap: 3rem;
		margin-top: 2rem;
		align-items: center;
		justify-content: center;
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
