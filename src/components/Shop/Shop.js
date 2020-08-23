import React, { useState } from 'react';
import fakeData from '../../fakeData'

const Shop = () => {
    // console.log(fakeData);
    let first10 = fakeData.slice(0, 10);
    // console.log(first10);
    let [products, setProducts] = useState(first10);
    return (
        <div>
            <ul>
                {
                    products.map(singleProduct => <li>{singleProduct.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;