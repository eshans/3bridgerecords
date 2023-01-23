import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import releases from "../data/releases.json"
import rel1 from "../images/carousel/aroundsphere.jpg"
import rel2 from "../images/carousel/ricoluv.jpg"
import rel3 from "../images/carousel/deepwoodslove.jpg"

export default function Carousel() {
	let settings = {
		dots: true,
		className: "sample"
	}

	return (
		<Wrapper>
			<div className="carousel">
				<Slider {...settings}>
					<div>
						<img src={rel1} height="300" width="300" />
					</div>
					<div>
						<img src={rel2} height="300" width="300" />
					</div>
					<div>
						<img src={rel3} height="300" width="300" />
					</div>
				</Slider>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.sample {
		margin-left: auto;
		margin-right: auto;
		width: 300px;
	}
	.carousel {
		margin: 1rem;
	}
`
