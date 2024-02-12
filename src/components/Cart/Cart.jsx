import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const {cartArray} = useLoaderData();
    
    console.log(cartArray);
    return (
        <div>
            <h2>Cart Page</h2>
        </div>
    );
};

export default Cart;