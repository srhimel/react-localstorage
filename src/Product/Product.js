import React from 'react';
import { addToDb, removeItem } from '../Utilities/localdb';

const Product = props => {
    const { title, id, image, category, price } = props.product;
    const handlePurchase = id => {
        addToDb(id)
    }
    const deletePurchase = id => {
        removeItem(id)
    }
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt="" height="150" />
            <p>${price}<small> {category}</small></p>
            <button onClick={() => handlePurchase(id)}>Add to Cart</button>
            <button onClick={() => deletePurchase(id)}>Remove</button>

        </div>
    );
};

export default Product;