
import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      detail,
      price: parseFloat(price), 
      quantity: parseInt(quantity) 
    };
    addProduct(newProduct); 
    setName(''); 
    setDetail('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Detalle:</label>
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio Unitario:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AddProductForm;
