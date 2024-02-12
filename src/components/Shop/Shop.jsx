import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const productData = useLoaderData();
    console.log(productData);
    return (
        <div className='my-container'>
            <div className='product-container'>
                {
                    productData.map(product =>
                        <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;