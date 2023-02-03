import { useParams, Link } from "react-router-dom"
import releases from "../data/releases.json"
import styled from "styled-components"
import "../main.css"

function SingleRelease(props) {
	const { id } = useParams()
	//r.id === id compares r.id of type number to id of type string, which will result false due to the '===' strict operator so +id converts
	const release = releases.find((r) => r.id === +id)
	const { imageURL, title, description, buy, stream } = release

	return (
		<Wrapper>
			<div className="release-container">
				<div className="item">
					<img src={imageURL} className="image" alt={title} />
					<p className="description">{description}</p>
				</div>
			</div>
			<div className="links-container">
				<div className="link">
					<a target="_blank" href={buy} rel="noreferrer">
						Buy
					</a>
				</div>
				<div className="link">
					<a target="_blank" href={stream} rel="noreferrer">
						Stream
					</a>
				</div>
				<div className="link">
					<Link to="/releases"> Back To Releases</Link>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.release-container {
		display: flex;
		margin-top: 10px;
	}

	.release-container .item {
		margin: 3px;
		padding: 5px 0 0 5px;
	}

	.release-container .item img {
		float: left;
		margin-right: 20px;
		width: 20em;
	}

	.info {
		padding: 0 20px 10px 10px;
		margin-right: 20px;
	}

	.links-container {
		margin: 15px 0 0 10px;
	}

	.link a {
		color: var(--clr-primary-10);
		font-size: 1.5rem;
	}

	.title,
	.artist {
		color: #e6e6e6;
	}

	.description {
		color: #fff;
		font-size: 1.4rem;
	}
`

export default SingleRelease
