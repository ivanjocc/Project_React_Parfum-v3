import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../assets/styles/Admin.module.scss";

const Admin = () => {
  const navigate = useNavigate();

  const navigateToAddProduct = () => {
    navigate('/add-product');
  };

  const navigateToProductList = () => {
    navigate('/products');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={styles.adminPanel}>
      <h1>Admin Panel</h1>
      <p>Welcome to the administration panel. From here you can manage various aspects of the application.</p>

      <div>
        <button onClick={navigateToAddProduct}>Add Product</button>
        <button onClick={navigateToProductList}>Manage Products</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Admin;
