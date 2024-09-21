
import React, { useState, useEffect } from 'react';

const AddProductForm = ({ addProduct, initialData, isEditing }) => {
  
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (isEditing && initialData) {
      setName(initialData.name);
      setDetail(initialData.detail);
      setPrice(initialData.price);
      setQuantity(initialData.quantity);      
    }
  }, [initialData, isEditing]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      detail,
      price: parseFloat(price), 
      quantity: parseInt(quantity) 
    };
    addProduct(newProduct); 
    if (!isEditing) {
      setName(''); 
      setDetail('');
      setPrice('');
      setQuantity('');
    }
   };

  return (
    <form onSubmit={handleSubmit}>

      <input
      type='text'
      placeholder='nombre del producto'
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      />

      <input
      type='text'
      placeholder='detalle del producto'
      value={detail}
      onChange={(e) => setDetail(e.target.value)}
      required
      />
      
      <input
       type='number'
       placeholder='precio unitario'
       value={price}
       onChange={(e) => setPrice(e.target.value)}
       required
       />
        <input type='number'
        placeholder='cantidad'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
        />
   
    
    <button type="submit">{isEditing ? 'Actualizar Producto' : 'Agregar producto'}</button>
    </form>
  );
};

export default AddProductForm;
