import { useState } from "react"
import releases from "../data/releases.json"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "../main.css"
import logo from "../images/logo.png"

const Release = () => {
	// get first 15 items in array
	const STEP = 15
	const [items, setItems] = useState(releases.slice(0, STEP))

	//Adds next 12
	const loadMore = () => {
		setItems([...items, ...releases.slice(items.length, items.length + STEP)])
	}

	return (
		<Wrapper>
			<h2 className="header">Releases </h2>
			<hr />
			<div className="release fadein">
				{items.map((item, i) => (
					<div className="item" key={i}>
						<Link to={`/release/${item.id}`}>
							<img src={item.imageURL} alt={item.artist} />
						</Link>
					</div>
				))}
				{/* If array is at the end, hide button */}
				{items.length < releases.length && (
					<button onClick={loadMore} className="btn">
						<img src={logo} />
						<p>SHOW MORE..</p>
					</button>
				)}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.release {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px);
		gap: 3rem;
		margin: 2rem 0 1rem 30px;
		align-items: center;
		justify-content: center;
	}

	.item img {
		width: 270px;
	}

	h4 {
		margin-bottom: 0.3rem;
		padding: 0;
	}

	.header {
		color: #fff;
		text-align: center;
	}

	.fadein img {
		opacity: 0.8;
		transition: 1s ease;
	}

	.fadein img:hover {
		opacity: 1;
		transition: 1s ease;
		border: solid 2px var(--clr-grey-8);
	}

	.small {
		font-size: 0.9rem;
		font-weight: bold;
	}

	.border {
		display: grid;
		place-items: center;
		min-height: 200px;
		border: solid 2px var(--clr-grey-3);
		padding: 0.5rem;
	}

	.linear-repeating {
		border-width: 3px;
		border-image: repeating-linear-gradient(45deg, gray, black 15%) 1;
	}

	.btn {
		height: 270px;
		background-color: black;
		border: none;
		outline: none;
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		width: 90%;
		margin-top: -5px;
	}

	.btn img {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		cursor: pointer;
	}

	.btn p {
		margin-top: 3rem;
		font-size: 1rem;
	}
`
export default Release
