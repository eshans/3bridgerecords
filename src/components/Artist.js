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
							<span className="name">{artist.name} </span>
						</Link>
					</div>
				))}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	img {
		width: 220px;
	}

	.header {
		color: #fff;
	}

	.content.artists {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		text-align: left;
		text-transform: uppercase;
		align-items: left;
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

	@media screen and (max-width: 800px) {
		.image {
			display: none;
		}

		.content.artists {
			margin-left: 10px;
		}

		.name {
			font-size: 1.5rem;
		}
	}
`
export default Artist
