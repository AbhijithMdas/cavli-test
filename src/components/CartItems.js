import React from 'react'
import Cart from './Cart';


function CartItems(props) {
  return (
    <div className="cartitem-container">
      <h1>Shopping Cart</h1>
      <button onClick={props.Close}>close cart</button>
      <Cart cartItems={props.items} />
  
    </div>
  );
}

export default CartItems
