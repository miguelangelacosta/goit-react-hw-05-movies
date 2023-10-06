import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error({ message }) {
  const navigate = useNavigate(); // Obtén la función de navegación

  const goBack = () => {
    navigate(-1); // Navega hacia atrás en la historia de navegación
  };

  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={goBack}>Volver atrás</button> {/* Botón para volver atrás */}
    </div>
  );
}

export default Error;
