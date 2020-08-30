import React from "react";

const ProductReview = (props) => {
  console.log(props.product);
  console.log(props.product.name);
  let { name, quantity } = props.product;
  return (
    <div>
      <h2>{name}</h2>
      <h1>Quantity: {quantity}</h1>
    </div>
  );
};

export default ProductReview;
