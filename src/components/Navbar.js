import React, { useState, useRef, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { links, social } from "../data"
import logo from "../images/logo.png"
import styled from "styled-components"
import "../main.css"

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false)
	const linksContainerRef = useRef(null)
	const linksRef = useRef(null)
	const toggleLinks = () => {
		setShowLinks(!showLinks)
	}

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`
		} else {
			linksContainerRef.current.style.height = "0px"
		}
	}, [showLinks])

	return (
		<Wrapper>
			<nav>
				<div className="nav-center">
					<div className="nav-header">
						<img src={logo} className="logo" alt="logo" />
						<button className="nav-toggle" onClick={toggleLinks}>
							<FaBars />
						</button>
					</div>
					<div className="links-container" ref={linksContainerRef}>
						<ul className="links" ref={linksRef}>
							{links.map((link) => {
								const { id, url, text } = link
								return (
									<li class="link" key={id}>
										<a href={url}>{text}</a>
									</li>
								)
							})}
						</ul>
					</div>
					<ul className="social-icons">
						{social.map((socialIcon) => {
							const { id, url, icon } = socialIcon
							return (
								<li key={id}>
									<a href={url} rel="noreferrer" target="_blank">
										{icon}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	nav {
		background: var(--clr-black);
		box-shadow: var(--light-shadow);
	}

	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}

	.nav-toggle {
		font-size: 1.5rem;
		color: var(--clr-white);
		background: transparent;
		border-color: transparent;
		transition: var(--transition);
		cursor: pointer;
	}

	.nav-toggle:hover {
		color: var(--clr-white);
		transform: rotate(90deg);
	}

	.logo {
		height: 3rem;
	}

	.links a {
		color: var(--clr-white);
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: var(--spacing);
		display: block;
		padding: 0.5rem 1rem;
		transition: var(--transition);
		font-family: "Nunito Bold", sans-serif;
		display: inline-block;
		position: relative;
	}

	.links a:hover {
		color: var(--clr-primary-5);
		padding-left: 1.5rem;
	}

	.links a::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.links a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.social-icons {
		display: none;
	}

	.links-container {
		height: 0;
		overflow: hidden;
		transition: var(--transition);
	}

	.show-container {
		height: 10rem;
	}

	.description {
		font-size: 1rem;
		color: #fff;
	}

	@media screen and (min-width: 800px) {
		.nav-center {
			max-width: 1170px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
		}

		.nav-header {
			padding: 0;
		}

		.nav-toggle {
			display: none;
		}

		.links-container {
			height: auto !important;
			/*inline style has to get overwritten*/
		}

		.links {
			display: flex;
		}

		.links a {
			padding: 0;
			margin: 0 1rem;
		}

		.links a:hover {
			padding: 0;
			background: transparent;
		}

		.social-icons {
			display: flex;
			font-size: 18px;
		}

		.social-icons a {
			margin: 0 0.5rem;
			color: var(--clr-white);
			transition: var(--transition);
		}

		.social-icons a:hover {
			color: var(--clr-primary-7);
		}
	}
`

export default Navbar
