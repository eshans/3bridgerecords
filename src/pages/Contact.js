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
			<h2> Fill out the below form and get in touch!</h2>
			<form
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				method="POST"
				target="_blank">
				<input
					name="name"
					type="text"
					className="feedback-input"
					placeholder="Name"
				/>
				<input
					name="email"
					type="text"
					className="feedback-input"
					placeholder="Email"
				/>
				<textarea
					name="text"
					className="feedback-input"
					placeholder="Com  ment"></textarea>
				<input type="submit" value="SUBMIT" />
			</form>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	form {
		max-width: 420px;
		margin: 50px auto;
	}

	.feedback-input {
		color: white;
		font-family: Helvetica, Arial, sans-serif;
		font-weight: 500;
		font-size: 18px;
		border-radius: 5px;
		line-height: 22px;
		background-color: transparent;
		border: 2px solid #cc6666;
		transition: all 0.3s;
		padding: 13px;
		margin-bottom: 15px;
		width: 100%;
		box-sizing: border-box;
		outline: 0;
	}

	.feedback-input:focus {
		border: 2px solid #cc4949;
	}

	textarea {
		height: 150px;
		line-height: 150%;
		resize: vertical;
	}

	[type="submit"] {
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		width: 100%;
		background: #cc6666;
		border-radius: 5px;
		border: 0;
		cursor: pointer;
		color: white;
		font-size: 24px;
		padding-top: 10px;
		padding-bottom: 10px;
		transition: all 0.3s;
		margin-top: -4px;
		font-weight: 700;
	}
	[type="submit"]:hover {
		background: #cc4949;
	}
`
export default Contact
