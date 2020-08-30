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
    let newCart = [...cart, product]; // ...cart to copy old cart
    setCart(newCart);
    let sameProduct = newCart.map((pd) => pd.key === product.key);
    let count = sameProduct.length;
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
