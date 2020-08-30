import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  let cart = props.cart;
  console.log(cart);
  // let total = cart.reduce((total, prd) => total + prd.price, 0)
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 6.99;
  }
  let tax = total / 10;

  function numFormat(num) {
    let precision = num.toFixed(2);
    return Number(precision);
  }

  let grandTotal = total + shipping + tax;

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Item Ordered: {cart.length}</p>
      <p>Product price: {numFormat(total)}</p>
      <p>Shipping: {shipping}</p>
      <p>Vat (10%): {numFormat(tax)}</p>
      <p>Total Price: {numFormat(grandTotal)}</p>
      <br />
      <Link to="/review"><button className="buy-button">Review Order</button>
</Link>
    </div>
  );
};

export default Cart;
