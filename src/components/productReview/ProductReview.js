import React from "react";

const ProductReview = (props) => {
  // console.log(props.product);
  // console.log(props.product.name);
  let { name, quantity } = props.product;
  let reviewStyle = {
    margin: "10px",
    paddingLeft: "150px",
    borderBottom: "1px solid lightgray",
    paddingBottom: "10px",
  };
  return (
    <div style={reviewStyle}>
      <h2 className="product-name">{name}</h2>
      <p>Quantity: {quantity}</p>
      <br />
      <button className="buy-button">Remove</button>
    </div>
  );
};

export default ProductReview;
