import React from 'react';

const productData = async () => {
    const res = await fetch('http://localhost:5000/products',{cache:'force-cache'});
    return res.json();
}

const ProductPage = async () => {

    const products = await productData();
    return (
        <div className='mx-auto grid grid-cols-3 gap-5 mt-5'>
            {
                products.map((product, index) => <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <span className='font-bold'>Category: {product.category}</span>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className='flex w-full justify-between items-center mt-5'>
                            <button className='btn'>Price: {product.details.price}$</button>

                            <button className='btn'>{product.details.inStock? "InStock" : "Out of Stock"}</button>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ProductPage;