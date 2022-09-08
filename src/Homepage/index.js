import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import SliderBox from "./SliderBox";
import Footer from "./Footer";

class Homepage extends React.Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <SliderBox />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
