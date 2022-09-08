import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Homepage from "./Homepage";
import "./App.css";
import Products from "./Products";
import DetailProduct from "./DetailProduct";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import TermsOfUse from "./Tandc/TermsOfUse";
import PrivacyPolicy from "./Tandc/PrivacyPolicy";

class App extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Router>
        <Homepage path="/" />
        <Products path="/products" />
        <DetailProduct path="/products/:id" />
        <AboutUs path="/about_us" />
        <ContactUs path="/contact_us" />
        <TermsOfUse path="/terms_of_use" />
        <PrivacyPolicy path="/privacy_statement" />
      </Router>
    );
  }
}

export default App;
