import React from "react";

const ProductReview = (props) => {
  // console.log(props.product);
  // console.log(props.product.name);
  let { name, quantity, key, price } = props.product;
  let reviewStyle = {
    padding: "10px",
    marginLeft: "150px",
    borderBottom: "1px solid lightGray",
  };
  return (
    <div style={reviewStyle}>
      <h2 className="product-name">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <br />
      <button onClick={() => props.removeButton(key)} className="buy-button">
        Remove
      </button>
    </div>
  );
};

export default ProductReview;
