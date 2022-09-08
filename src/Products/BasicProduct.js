import React from "react";
import { Link } from "@reach/router";
import "./basicProduct.css";

const BasicProduct = (props) => {
  let descriptionArray = props.description.split(";");
  return (
    <Link
      to={`/products/${props.title.split(" ").join("_")}`}
      className="basic-product-a"
    >
      <div className="basic-product">
        <img
          src={`https://srasmedicines.com/assets/images/product/${props.images[0].image}`}
          alt={props.images[0].caption}
        />
        {descriptionArray.length > 0 ? <p>{descriptionArray[0]}</p> : null}
        <h2>{props.title}</h2>
        <h4>
          ₹ {props.detail.price}{" "}
          <span
            style={{
              fontWeight: "400",
              color: "#838383",
              fontSize: ".8em",
            }}
          >
            inc tax
          </span>
        </h4>

        {props.headline.length > 0 ? <h3>{props.headline}</h3> : null}
      </div>
    </Link>
  );
};

export default BasicProduct;
