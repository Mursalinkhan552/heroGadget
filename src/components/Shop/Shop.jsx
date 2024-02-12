import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const productData = useLoaderData();
    console.log(productData);

    // Button Handler
    const handleAddToCart = (id) => {
        console.log(id);
    }

    return (
        <div className='my-container'>
            <div className='product-container'>
                {
                    productData.map(product =>
                        <ProductCard
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;