
import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="cart">
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

export default Cart;
