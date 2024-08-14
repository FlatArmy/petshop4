import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import StoreRegistration from './components/StoreRegistration';
import Register from './components/Register';
import Login from './components/Login';
import UserRegistration from './components/UserRegistration';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>OmegaPetShop</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/products">Lista de Productos</Link></li>
              <li><Link to="/store-registration">Registro de Tienda</Link></li>
              <li><Link to="/user-registration">Registro de Usuario</Link></li>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/register">Registro</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/store-registration" element={<StoreRegistration />} />
            <Route path="/user-registration" element={<UserRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Bienvenido a OmegaPetShop</h2>
      <p>Encuentra los mejores productos para tus mascotas.</p>
      <p><Link to="/products">Ver Lista de Productos</Link></p>
    </div>
  );
}

export default App;
