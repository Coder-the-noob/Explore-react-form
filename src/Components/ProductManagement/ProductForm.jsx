import React, { useState } from "react";

const ProductForm = ({handleAddProduct}) => {
 
    const [error, setError] = useState('');
    const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if(name.length === 0 || price.length === 0 || quantity.length === 0){
        setError('All fields are required');
        return;
    }

    const newProduct = {
        name,
        price,
        quantity
    };
    // console.log(newProduct);
    handleAddProduct(newProduct);
    
  };

  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Add Product" />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProductForm;
