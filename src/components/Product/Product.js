import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  // console.log(props.product);
  let { name, price, img, seller, stock, key } = props.productDetails;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3 className="product-name">
          <Link to={"/" + key}>{name}</Link>
        </h3>

        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <h4>${price}</h4>
        <p>
          <small>only {stock} left in stock</small>
        </p>
        {props.addToCart && (
          <button
            className="buy-button"
            onClick={() => props.handleAddButton(props.productDetails)}
          >
            <FontAwesomeIcon icon={faCartPlus} /> add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
