import React, { useEffect, useState } from 'react';
import styles from "../assets/styles/ProductList.module.scss";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleUpdate = (id, updatedProduct) => {
        fetch(`/api/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(response => {
            if (response.ok) {
                alert('Product updated successfully!');
                setProducts(products.map(product => product._id === id ? {...product, ...updatedProduct} : product));
            } else {
                throw new Error('Failed to update product');
            }
        })
        .catch(error => {
            console.error('Failed to update product:', error);
            alert(error.message);
        });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            fetch(`/api/products/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    alert('Product deleted successfully!');
                    setProducts(products.filter(product => product._id !== id));
                } else {
                    throw new Error('Failed to delete product');
                }
            })
            .catch(error => {
                console.error('Failed to delete product:', error);
                alert(error.message);
            });
        }
    };

    const handleChange = (index, key, value) => {
        const newProducts = [...products];
        newProducts[index][key] = value;
        setProducts(newProducts);
    };

    return (
        <div className={styles.productListContainer}>
            <h1>Product List</h1>
            <ul className={styles.productList}>
                {products.map((product, index) => (
                    <li key={product._id} className={styles.productItem}>
                        <input
                            type="text"
                            value={product.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                        />
                        <input
                            type="text"
                            value={product.image}
                            onChange={(e) => handleChange(index, 'image', e.target.value)}
                        />
                        <input
                            type="text"
                            value={product.note}
                            onChange={(e) => handleChange(index, 'note', e.target.value)}
                        />
                        <button onClick={() => handleUpdate(product._id, {
                            name: product.name,
                            image: product.image,
                            note: product.note
                        })}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(product._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
