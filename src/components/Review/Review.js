import React from "react";
import { useState, useEffect } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ProductReview from "../productReview/ProductReview";
import Cart from "../Cart/Cart";
import thanks from "../../images/thanks.gif";

const Review = () => {
  let [cart, setCart] = useState([]);
  let [orderPlaced, setOrderPlaced] = useState(false);
  let placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    processOrder();
  };

  let removeButton = (productKey) => {
    let newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  let thanksGIF;
  if (orderPlaced) {
    thanksGIF = <img src={thanks} alt="" />;
  }

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
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ProductReview
            key={pd.key}
            product={pd}
            removeButton={removeButton}
          ></ProductReview>
        ))}
        {thanksGIF}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={placeOrder} className="buy-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
