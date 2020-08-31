import React from "react";

const ProductReview = (props) => {
  // console.log(props.product);
  // console.log(props.product.name);
  let { name, quantity, key } = props.product;
  let reviewStyle = {
    padding: "10px",
    marginLeft: "150px",
    borderBottom: "1px solid lightgray",
  };
  return (
    <div style={reviewStyle}>
      <h2 className="product-name">{name}</h2>
      <p>Quantity: {quantity}</p>
      <br />
      <button onClick={() => props.removeButton(key)} className="buy-button">
        Remove
      </button>
    </div>
  );
};

export default ProductReview;
