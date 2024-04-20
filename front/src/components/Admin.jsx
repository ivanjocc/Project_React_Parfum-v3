import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido al panel de administración. Desde aquí puedes gestionar varios aspectos de la aplicación.</p>

      <div>
        <button onClick={() => navigate('/manage-users')}>Gestionar Usuarios</button>
        <button onClick={() => navigate('/manage-products')}>Gestionar Productos</button>
        <button onClick={() => navigate('/reports')}>Ver Reportes</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Admin;
