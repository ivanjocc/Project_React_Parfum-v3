import React, { useState } from 'react';
import styles from "../assets/styles/ProductForm.module.scss";

const ProductForm = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [note, setNote] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', file);
        formData.append('note', note);

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert('Product added successfully!');
                setName('');
                setFile(null);
                setNote('');
            } else {
                throw new Error('Failed to add product');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Image File:
                <input type="file" onChange={e => setFile(e.target.files[0])} />
            </label>
            <label>
                Note:
                <input type="text" value={note} onChange={e => setNote(e.target.value)} />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
