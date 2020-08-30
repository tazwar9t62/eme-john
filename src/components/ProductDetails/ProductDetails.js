import React from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { productKey } = useParams();
  let product = fakeData.find((pd) => pd.key === productKey);
  return (
    <div>
      <Product addToCart= {false} productDetails={product}></Product>
    </div>
  );
};

export default ProductDetails;
