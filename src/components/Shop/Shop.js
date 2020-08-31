import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  // console.log(fakeData);
  let first10 = fakeData.slice(0, 10);
  // console.log(first10);
  let [products, setProducts] = useState(first10);
  let [cart, setCart] = useState([]);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
