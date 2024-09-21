
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import Modal, {  } from 'react-modal';
import './App.css'; 

Modal.setAppElement('#root');

function App() {
  
  const [products, setProducts] = useState([
    { name: 'queso', detail: 'semiduro', price: 10000, quantity: 2 },
    { name: 'arroz', detail: 'granos enteros', price: 20000, quantity: 1 }
  ]);


  const [isAddProductModalOpen, setItAddProducModaltOpen] = useState(false);

  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false)

  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setItAddProducModaltOpen(false);
  };

  const updateProduct = (updateProduct) => {
    const updateProducts = products.map((product, index) => 
    index === editingProduct.index ? updateProduct : product
    );
    setProducts(updateProducts);
    setIsEditProductModalOpen(false);
  };

  const deleteProduct = (indexToDelete) => {
    const updateProducts = products.filter((_, index) => index !== indexToDelete);
    setProducts(updateProducts);
  };

  const openEditModal = (product, index) => {
    setEditingProduct({ ...product, index});
    setIsEditProductModalOpen(true);
  }



  return (
    <div className="container">

      <h1>Gestion de Productos</h1>

      <button onClick={() => setItAddProducModaltOpen(true)} className='modal-button'>
        Agregar Producto
      </button>


        <Modal
         isOpen={isAddProductModalOpen}
         onRequestClose={() => setItAddProducModaltOpen(false)}
         contentLabel='Agregar nuevo Producto'
         className='modal'
         overlayClassName='modal-overlay'
        >
          <h2>Agregar Nuevo Producto</h2>
          <AddProductForm addProduct={addProduct} />
          <button onClick={() => setItAddProducModaltOpen} className='close-modal-button'>Cerrar</button>
        </Modal>

      <h1>Lista de Productos</h1>
      
      <ProductList
       products={products}
       deleteProduct={deleteProduct}
       openEditModal={openEditModal} />


       <Modal
          isOpen={isEditProductModalOpen}
          onRequestClose={() => setIsEditProductModalOpen(false)}
          contentLabel='Editar Producto'
          className='modal'
          overlayClassName='modal-overlay'
          >
            <h2>Editar Producto</h2>
            {editingProduct && (
              <AddProductForm
              addProduct={updateProduct}
              initialData={editingProduct}
              isEditing
              />

            )}
            <button onClick={() => setIsEditProductModalOpen(false)} className='close-modal-button'>Cerrar</button>
          </Modal>
      
      
      
    </div>
  );
}

export default App;
