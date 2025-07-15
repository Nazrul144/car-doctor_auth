import React from 'react';
import {products} from '../../lib/products';
import ProductsCard from '../cards/ProductsCard';

const PopularProducts = () => {
 
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-primary font-bold text-center mb-4'>Popular Products</h1>
                <h1 className='font-bold text-center text-4xl mb-3'>Browse Our Products</h1>
                <p className='text-gray-500 text-center px-2'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 mt-8'>
                {
                        products?.map((product)=> <ProductsCard product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
}

export default PopularProducts;
