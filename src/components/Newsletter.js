import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Wrapper = styled.div`
  min-height:15vh;
  width:40vw;

input,
input:focus {
  padding: 10px 13px;
  border: 0;
  outline: 0;
}

input[type="email"] {
  margin-right: 15px;
  width: 300px;
  color: #a09f9f;
}

button {
  padding: 10px 15px;
  color: #c0d6db;
  background: #427b89;
  text-shadow: 0 2px 2px #333;
  box-shadow: inset 0 0 0 transparent;
  background: var(--clr-red-dark);
  background: linear-gradient(to bottom, #508f9f 0%, #346976 100%);
  transition: all .3s ease-in-out;
}

button:hover,
button:focus {
  box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.3),
    0 0 10px rgba(255, 255, 255, 0.1);
  color: white;
  margin-left: 10px;
}
`

const url = process.env.REACT_APP_MAILCHIMP_URL

const SimpleForm = () => <MailchimpSubscribe url={url} />

// use the render prop and your custom form
const CustomForm = () => (
  <Wrapper>
    <MailchimpSubscribe url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
      )}
    />
  </Wrapper>
)


const Newsletter = () => {
  return (
    <Wrapper>
      <h3> Subscribe to the 3Bridge Newsletter!</h3>
      <CustomForm />
    </Wrapper>
  )
}


export default Newsletter