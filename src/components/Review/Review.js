import React from "react";
import { useState, useEffect } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ProductReview from "../productReview/ProductReview";

const Review = () => {
  let [cart, setCart] = useState([]);
  let removeButton = (productKey) => {
    let newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    let savedCart = getDatabaseCart();
    let productKeys = Object.keys(savedCart);
    let cartProducts = productKeys.map((key) => {
      let product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div>
      <h1>Cart items: {cart.length}</h1>
      {cart.map((pd) => (
        <ProductReview
          key={pd.key}
          product={pd}
          removeButton={removeButton}
        ></ProductReview>
      ))}
    </div>
  );
};

export default Review;
