// src/App.js
import React, { useState } from 'react';
import ProductModule from './components/ProductModule';
import { chipsetData, moduleData } from './productData';
import './App.css';
import CartItems from './components/CartItems';
import ChipsetModule from './components/ChipsetModule';
import AddToCart from './components/AddToCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen,setPopup]= useState(false)
  const [Addtocart,setAddtocart]= useState(false)

  const addToCart = (id, name) => {
    const newItem = { id, name };
    setCartItems([...cartItems, newItem]);
  };
  const openCart=()=>{
    setPopup(true)
  } 
   const closeCart = () => {
    setPopup(false);
  };
  const closeDetails=()=>{
    setAddtocart(false)
  }
  const openDetails = () => {
    setAddtocart(true);
  };



  return (
    <div className="app">
      <h1>Store heading</h1>
      <div className="btn-container">
        <button onClick={openCart}>view Cart</button>
      </div>
      <h4>Smart Modules</h4>
      <div className="product-box-container">
        {moduleData.map((module, index) => (
          <React.Fragment key={module.id}>
            <ProductModule {...module} addToCart={addToCart} Open={openDetails} />
            {/* Add a line break after every second item */}
            {(index + 1) % 3 === 0 && (
              <div className="line-break" key={`br_${index}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <h2>Evaluation Kits</h2>
        <div className="product-box-container ">
      {chipsetData.map((module, index) => (
          <ChipsetModule
            id={module.id}
            name={module.name}
            photo={module.photo}
            
            Open={openDetails}
          />
      ))}
        </div>

      {/* <ChipsetSection addToCart={addChipsetCart} items={cartChip} />
      <Cart cartItems={cartItems} /> */}

      {isOpen ? (
        <CartItems Close={closeCart} items={cartItems} addToCart={addToCart} />
      ) : null}
      {Addtocart ? (
        <AddToCart Close={closeDetails} addToCart={addToCart} />
      ) : null}
    </div>
  );
};

export default App;
