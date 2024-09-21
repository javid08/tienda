
import React from 'react';

const ProductList = ({ products, deleteProduct, openEditModal }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Detalle</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.detail}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${product.price * product.quantity}</td>
            <td>
              <button onClick={() => openEditModal(product, index)} className='action-button'>Editar</button>
              <button onClick={() => deleteProduct(index)} className='action-button delete-button'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
