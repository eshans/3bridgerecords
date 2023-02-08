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
					required
				/>
				<input
					name="email"
					type="text"
					className="feedback-input"
					placeholder="Email"
					required
				/>
				<textarea
					name="text"
					className="feedback-input"
					required
					placeholder="Please place any links here you'd like us to listen to or just ask a question :)"></textarea>
				<input type="submit" value="SUBMIT" />
			</form>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	h2 {
		color: white;
		text-align: center;
		margin-top: 10px;
	}
	form {
		max-width: 600px;
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
		border: 2px solid blue;
		transition: all 0.3s;
		padding: 13px;
		margin-bottom: 15px;
		width: 100%;
		box-sizing: border-box;
		outline: 0;
	}

	.feedback-input:focus {
		border: 2px solid gray;
	}

	textarea {
		height: 150px;
		line-height: 150%;
		resize: vertical;
	}

	[type="submit"] {
		font-family: "Montserrat", Arial, Helvetica, sans-serif;
		width: 100%;
		background: gray;
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
