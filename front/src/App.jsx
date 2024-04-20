import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Connexion from "./components/Connexion";
import ProductForm from "./components/ProductForm";
import Admin from "./components/Admin";
import { produits, accueil } from "./data/data";
import styles from "./assets/styles/App.module.scss";

const App = () => {
  const [produitsFavoris, setProduitsFavoris] = useState([]);

  const handleAjusterProduitFavoris = (item) => {
    let result = produitsFavoris.filter((t) => t._id === item._id);
    if (result.length > 0) {
      setProduitsFavoris(produitsFavoris.filter((t) => t._id !== item._id));
    } else {
      setProduitsFavoris([...produitsFavoris, item]);
    }
  };

  return (
    <Router>
      <div className={`${styles.app_container} d-flex flex-column`}>
        <Header
          produitsFavoris={produitsFavoris}
          setProduitsFavoris={setProduitsFavoris}
        />
        <Banner />
        <Routes>
          <Route path="/" element={<Content
              produits={produits}
              accueil={accueil}
              handleAjusterProduitFavoris={handleAjusterProduitFavoris}
              produitsFavoris={produitsFavoris}
            />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
