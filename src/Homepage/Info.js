import React from "react";
import { Link } from "@reach/router";

import allMedicinesBackground from "../assets/images/srasMedicines.jpg";
import "./info-styles.css";

export const Info = () => {
  return (
    <div>
      <div className="info-main">
        <h1>SRAS Medicines</h1>
        <p>
          SRAS Medicines reaches lives of thousands of Customer&apos;s worldwide
          giving a unique range of products that help them lead healthier
          enriched lives. We have forgotten the fundamentals of Ayurveda &amp;
          the very essence of its healing &amp; beneficial properties in the
          treatment of various diseases which are ever growing in recent times.
        </p>
      </div>
      <Link to="/products" className="info-main-pic">
        <h2>Ayurvedic Medicines</h2>
        <div className="info-main-pic-i">
          <img src={allMedicinesBackground} alt="SRAS PRODUCTS RANGE" />
        </div>
      </Link>
    </div>
  );
};

export default Info;
