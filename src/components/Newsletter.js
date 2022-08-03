import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const StyledNewsletter = styled.div`
  min-height:15vh;
  width:40vw;
`;

const url = process.env.REACT_APP_MAILCHIMP_URL

const SimpleForm = () => <MailchimpSubscribe url={url} />

// use the render prop and your custom form
const CustomForm = () => (
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
)


const Newsletter = () => {
  return (
    <StyledNewsletter>
      <h3> Subscribe to the 3Bridge Newsletter!</h3>
      <CustomForm />
    </StyledNewsletter>
  )
}


export default Newsletter