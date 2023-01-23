import { useState } from "react"
import releases from "../data/releases.json"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "../main.css"

const Release = () => {
	// get first 12 items in array
	const STEP = 12
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
						{" "}
						SHOW MORE...{" "}
					</button>
				)}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.release {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		flex-wrap: wrap;
		margin: 2rem 0 1rem 30px;
	}

	.item {
		margin-bottom: 2rem;
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
		height: 5vh;
		background-color: blue;
		border-radius: 4px;
		border: none;
		outline: none;
		color: #fff;
		width: 270px;
		font-size: 16px;
		font-weight: bold;
		padding: 9px 0 1rem 0;
	}
`
export default Release
