import React from "react";
import Slider from "react-animated-slider";
import { Link } from "@reach/router";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./slider-styles.css";
import sthultaImg from "../assets/images/slider/SthultaHari.jpg";
import conceive_N from "../assets/images/slider/conceiveN.jpg";
import sperm_forte from "../assets/images/slider/spermforte.jpg";

const content = [
  {
    title: "स्थूलता हारी STHULTA HARI",
    description:
      "Useful in Weight Loss, Cures Fatty Liver, Improve Chronic Constipation",
    button: "Buy now",
    image: `${sthultaImg}`,
    user: "Neeru Malhotra",
    userProfile: "",
    productLink: "/products/STHULTA_HARI"
  },
  {
    title: "Conceive-N Drops",
    description: "Combination of Herbs which Increases Conception Rate",
    button: "Buy Now",
    image: `${conceive_N}`,
    user: "Neeru Malhotra",
    userProfile: "",
    productLink: "/products/CONCEIVE-N_Drops"
  },
  {
    title: "SPERM FORTE Capsules",
    description:
      "Improves problem of Premature Ejaculation, Improves Quality of Semen",
    button: "Buy now",
    image: `${sperm_forte}`,
    user: "Neeru Malhotra",
    userProfile: "",
    productLink: "/products/SPERM_FORTE_Capsules"
  }
];

export const SliderBox = () => (
  <div>
    <Slider autoplay={3000} className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <Link to={item.productLink}>{item.button}</Link>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderBox;
