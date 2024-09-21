
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.detail}</p>
      <p>Precio Unitario: ${product.price}</p>
      <p>Cantidad: {product.quantity}</p>
      <p className="product-total">Total: ${product.price * product.quantity}</p>
    </div>
  );
};

export default Product;
