import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { addToDB } from '../../utilities/fakeDB';
import { CartContext, ProductContext } from '../../App';
import toast from 'react-hot-toast';

const Shop = () => {
    // const productData = useLoaderData();
    const products = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext);


    // Button Handler
    const handleAddToCart = (product) => {

        let newCart = [];
        const exists = cart.find(existingProduct => existingProduct.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]

        }
        else {
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        toast.success('Product Added! 🛒')
        setCart(newCart)
        addToDB(product.id);
    }

    return (
        <div className='my-container'>
            <div className='product-container'>
                {
                    products.map(product =>
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