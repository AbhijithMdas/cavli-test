
import React from 'react';

const ProductModule = ({ id, name, category, photo, addToCart ,Open}) => (
  <div className="product-box">
    <img src={`images/${photo}`} alt={name} />
    <h3>{name}</h3>
    <p>{category}</p>
   
    <button onClick={Open}>Add to Cart</button>
  </div>
);


export default ProductModule;
