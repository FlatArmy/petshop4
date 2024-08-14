import React, { useState } from 'react';
import '../App.css';

function StoreRegistration() {
  const [storeName, setStoreName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Store registered:', storeName);

  };

  return (
    <div className="component-container">
      <h2>Registro de Tienda</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la Tienda:
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Introduce el nombre de la tienda"
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default StoreRegistration;
