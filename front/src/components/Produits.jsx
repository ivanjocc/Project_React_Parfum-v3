import React, { Fragment, useState, useEffect } from "react";
import Produit from "./Produit";
import styles from "../assets/styles/Produits.module.scss";
import SearchBar from "./SearchBar";

const Produits = ({ visible, handleAjusterProduitFavoris, produitsFavoris }) => {
  const [produits, setProduits] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [filterBy, setFilterBy] = useState({ byName: true, byNote: false });

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProduits(data))
      .catch(error => console.error('Error loading the products:', error));
  }, []);

  function handleInput(e) {
    const filter = e.target.value;
    setFilterInput(filter.trim().toLowerCase());
  }

  const handleFilter = (e) => {
    const byFilter = e.target.value;
    setFilterBy({ ...filterBy, [byFilter]: e.target.checked });
  };

  const getItemSavedState = (item) => {
    return produitsFavoris.some((p) => item._id === p._id);
  };

  return (
    <div className={`${styles.produits} ${visible ? "visible" : "hidden"}`}>
      <SearchBar
        handleInput={handleInput}
        handleFilter={handleFilter}
        filterBy={filterBy}
      />
      <div className={`${styles.grid} container`}>
        {produits
          .filter((item) => {
            if (filterBy.byName && !filterBy.byNote)
              return item.name.trim().toLowerCase().includes(filterInput);
            if (!filterBy.byName && filterBy.byNote)
              return item.note.trim().toLowerCase().includes(filterInput);
            return (
              item.note.trim().toLowerCase().includes(filterInput) ||
              item.name.trim().toLowerCase().includes(filterInput)
            );
          })
          .map((item) => (
            <Fragment key={item._id}>
              <Produit
                data={item}
                handleAjusterProduitFavoris={handleAjusterProduitFavoris}
                saved={getItemSavedState(item)}
              />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Produits;
