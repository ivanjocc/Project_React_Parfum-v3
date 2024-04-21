import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`/api/products/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setProducts(products.filter(product => product._id !== id));
                }
            })
            .catch(error => console.error('Failed to delete product:', error));
    };

    const handleEdit = (product) => {
        // Logic to edit product
        // This could be setting the product data in a form for editing
        console.log('Edit product:', product);
    };

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.note}
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
