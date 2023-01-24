import { useState } from "react"
import styled from "styled-components"

const FORM_ENDPOINT = "" // TODO - fill on the later step

const Contact = () => {
	const [submitted, setSubmitted] = useState(false)
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true)
		}, 100)
	}

	if (submitted) {
		return (
			<>
				<h2>Thank you!</h2>
				<div>We'll be in touch soon.</div>
			</>
		)
	}

	return (
		<Wrapper>
			<form
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				method="POST"
				target="_blank">
				<div className="name">
					<input type="text" placeholder="Your name" name="name" required />
				</div>
				<div className="email">
					<input type="email" placeholder="Email" name="email" required />
				</div>
				<div className="message">
					<textarea placeholder="Your message" name="message" required />
				</div>
				<div className="submit">
					<button type="submit"> Send a message </button>
				</div>
			</form>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
    height:auto;
    overflow:hidden;
    border-radius:10px;
}
	}

	form label {
		font-size: 14px;
		color: darkgray;
		cursor: pointer;
	}

	form label,
	form input {
		float: left;
		clear: both;
	}

	form input, textarea {
		margin: 15px 0;
		padding: 15px 10px;
		width: 100%;
		outline: none;
		border: 1px solid #bbb;
		border-radius: 20px;
		display: inline-block;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-ms-transition: 0.2s ease all;
		-o-transition: 0.2s ease all;
		transition: 0.2s ease all;
	}

	form input[type="text"]:focus,
	form input[type="password"]:focus {
		border-color: cornflowerblue;
	}

	input[type="submit"] {
		padding: 15px 50px;
		width: auto;
		background: #1abc9c;
		border: none;
		color: white;
		cursor: pointer;

		-webkit-transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		-ms-transition: 0.2s ease all;
		-o-transition: 0.2s ease all;
		transition: 0.2s ease all;
	}

	input[type="submit"]:hover {
		opacity: 0.8;
	}

	input[type="submit"]:active {
		opacity: 0.4;
	}
`
export default Contact
