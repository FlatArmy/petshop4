import React, { useEffect, useState } from 'react';
import '../App.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStore, setSelectedStore] = useState('');

  useEffect(() => {
    // Simulando una llamada a la API
    const fetchProducts = async () => {
      return [
        { id: 1, name: 'Comida para Perro', price: '$20', category: 'Comida', store: 'Tienda A' },
        { id: 2, name: 'Juguete para Gato', price: '$15', category: 'Juguetes', store: 'Tienda B' },
        { id: 3, name: 'Cama para Perro', price: '$50', category: 'Camas', store: 'Tienda A' },
      ];
    };

    const fetchCategories = async () => {
      return ['Comida', 'Juguetes', 'Camas'];
    };

    const fetchStores = async () => {
      return ['Tienda A', 'Tienda B'];
    };

    Promise.all([fetchProducts(), fetchCategories(), fetchStores()]).then(([products, categories, stores]) => {
      setProducts(products);
      setCategories(categories);
      setStores(stores);
    });
  }, []);

  const filteredProducts = products.filter(product => {
    return (selectedCategory ? product.category === selectedCategory : true) &&
           (selectedStore ? product.store === selectedStore : true);
  });

  return (
    <div className="component-container">
      <h2>Lista de Productos</h2>

      <div className="filters">
        <label>
          Categoría:
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <label>
          Tienda:
          <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
            <option value="">Todas</option>
            {stores.map((store, index) => (
              <option key={index} value={store}>{store}</option>
            ))}
          </select>
        </label>
      </div>

      <ul className="product-list">
        {filteredProducts.map(product => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <p>Categoría: {product.category}</p>
            <p>Tienda: {product.store}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
