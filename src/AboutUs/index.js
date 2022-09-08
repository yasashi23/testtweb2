import React from "react";
import Navbar from "../Homepage/Navbar";
import "./index.css";
import Footer from "../Homepage/Footer";

class AboutUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="aboutUs">
        <Navbar />
        <div className="aboutUs-a">
          <h1>SRAS Medicines</h1>
          <p>
            SRAS Medicines reaches lives of thousands of Customer&apos;s
            worldwide giving a unique range of products that help them lead
            healthier enriched lives. We have forgotten the fundamentals of
            Ayurveda &amp; the very essence of its healing &amp; beneficial
            properties in the treatment of various diseases which are ever
            growing in recent times.
          </p>
          <p>
            SRAS Medicines was established in 1999 by Senior
            Ayurvedacharya Dr. Neeru Malhotra with a clear concept to develop
            ayurvedic medicines which offer&apos;s complete treatment of
            diseases which are generally not covered by conventional other
            system of medicine. Besides winning esteemed awards the company was
            well appreciated by the hundreds of doctors &amp; thousands of
            patients.
          </p>
          <p>
            SRAS Medicines is ever growing with many Ayurvedic medicines
            under its wings &amp; is spreading its reach all over the country.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
