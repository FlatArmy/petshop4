import React, { useState } from 'react';
import '../App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User logged in:', username);
  };

  return (
    <div className="component-container">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Introduce tu nombre de usuario"
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
          />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
