
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import './App.css'; 

function App() {
  
  const [products, setProducts] = useState([
    { name: 'queso', detail: 'semiduro', price: 10000, quantity: 2 },
    { name: 'arroz', detail: 'granos enteros', price: 20000, quantity: 1 }
  ]);

  
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container">

     <h2>Agregar Nuevo Producto</h2>
      
      <AddProductForm addProduct={addProduct} />


      <h1>Lista de Productos</h1>
      
      <ProductList products={products} />
      
      
    </div>
  );
}

export default App;
