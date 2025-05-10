import Navbar from "../../modules/Navbar/Navbar";
import { ContactContainer,
  ContactFormContainer
 } from "./ContactPage.styles";

function ContactPage() {
  return(
    <>
    <ContactContainer>
      <Navbar />
      <ContactFormContainer>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your message (optional)" rows="4" />
          <button type="submit">Place Order</button>
        </form>
      </ContactFormContainer>
    </ContactContainer>
    </>
  );

}

export default ContactPage;