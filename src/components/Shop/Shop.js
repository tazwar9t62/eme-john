import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    // console.log(fakeData);
    let first10 = fakeData.slice(0, 10);
    // console.log(first10);
    let [products, setProducts] = useState(first10);
    let [cart, setCart] = useState([]);
    const handleAddButton = (product) => {
        console.log("product added to cart", product);
        let newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(singleProduct => <Product
                        productDetails={singleProduct}
                        handleAddButton={handleAddButton}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <h3>This is demo cart</h3>
                <h5>Total card number {cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;