
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Detalle</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th>Total</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
