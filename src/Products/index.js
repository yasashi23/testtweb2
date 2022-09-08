import React from "react";
import { Link } from "@reach/router";
import Navbar from "../Homepage/Navbar";
import BasicProduct from "./BasicProduct";
import Footer from "../Homepage/Footer";
import "./productsS.css";
import ProductsData from "./ProductData.json";

class Products extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let products = ProductsData.map((product, index) => (
      <BasicProduct key={index} {...product} />
    ));
    return (
      <div className="products-page">
        <Navbar />
        <h1 className="products-heading">Ayurvedic Medicines</h1>
        <p className="products-para">
          SRAS Medicines reaches lives of thousands of Customer&apos;s worldwide
          giving a unique range of products that help them lead healthier
          enriched lives. We have forgotten the fundamentals of Ayurveda &amp;
          the very essence of its healing &amp; beneficial properties in the
          treatment of various diseases which are ever growing in recent times.
        </p>
        <div className="medicineList">
          {ProductsData.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.title.split(" ").join("_")}`}
            >
              {product.title}
            </Link>
          ))}
        </div>
        <div className="products-list">{products}</div>

        <Footer />
      </div>
    );
  }
}

export default Products;
