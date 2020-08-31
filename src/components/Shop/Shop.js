import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  // console.log(fakeData);
  let first10 = fakeData.slice(0, 10);
  // console.log(first10);
  let [products, setProducts] = useState(first10);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    let savedCart = getDatabaseCart();
    let productKeys = Object.keys(savedCart);
    let previousCart = productKeys.map((existingKey) => {
      let product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);
  const handleAddButton = (product) => {
    // console.log("product added to cart", product);
    let toBeaddedKey = product.key;
    let sameProduct = cart.find((pd) => pd.key === toBeaddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      let others = cart.filter((pd) => pd.key !== toBeaddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((singleProduct) => (
          <Product
            key={singleProduct.key}
            addToCart={true}
            productDetails={singleProduct}
            handleAddButton={handleAddButton}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {
            <Link to="/review">
              <button className="buy-button">Review Order</button>
            </Link>
          }
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
