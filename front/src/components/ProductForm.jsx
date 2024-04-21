import React, { useState } from 'react';
import styles from "../assets/styles/ProductForm.module.scss";

const ProductForm = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('assets/images/produits/');
    const [note, setNote] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const productData = {
            name,
            image,
            note
        };

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                console.log('Product added successfully');
                alert('Product added successfully!');
                setName('');
                setImage('assets/images/produits/');
                setNote('');
            } else {
                throw new Error('Failed to add product');
            }
        } catch (error) {
            console.error('Failed to add product:', error);
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <label>
                Image URL:
                <input type="text" value={image} onChange={e => setImage(e.target.value)} required />
            </label>
            <label>
                Note:
                <input type="text" value={note} onChange={e => setNote(e.target.value)} required />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
