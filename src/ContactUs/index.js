import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import "./styles.css";

class ContactUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-us">
          <h1>CONTACT US</h1>
          <h2>
            Your health and satisfaction with our site are of equal importance
            to us!
          </h2>
          <h2>Get in touch with us if you have any questions or feedback.</h2>
          <div>
            <h3>
              Call Us: 
              <a href="tel:+918929987739">+91 89299 87739</a>
              <a href="tel:+919255427922">+91 92554 27922</a>
            </h3>
          </div>
          <div>
            <h3>(Available between 0900 hrs IST to 1700 hrs IST)</h3>
          </div>
          <div>
            <h3>
              Please allow upto 24 hours for a response and include your contact
              information so we may respond back to you. Email Us:
              srasneeru@gmail.com
            </h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
