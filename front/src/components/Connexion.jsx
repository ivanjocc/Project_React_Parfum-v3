import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../assets/styles/Connexion.module.scss";

const Connexion = ({
  handleEmail,
  handlePassword,
  email,
  password,
  user,
  handleDeconnexion
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const tryConnexion = () => {
    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            navigate('/admin');
        } else {
            setError(true);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        setError(true);
    });
  };

  return (
    <div className={`${styles.menuConnexion} border p-20`}>
      {user ? (
        <a onClick={() => { handleDeconnexion(); navigate('/'); }} href="#">
          Déconnexion
        </a>
      ) : (
        <>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Courriel"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePassword}
          />
          <button onClick={tryConnexion}>Connexion</button>
          {error && (
            <span className="error">* Utilisateur inexistant ou mot de passe incorrect</span>
          )}
        </>
      )}
    </div>
  );
};

export default Connexion;
