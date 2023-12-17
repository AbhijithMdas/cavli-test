import React from 'react'
import ChipsetSection from './ChipsetSection';
function AddToCart(props) {
  return (
    <div className="cartitem-container">
    <button onClick={props.Close}>Close</button>
      <ChipsetSection addToCart={props.addToCart} />
    </div>
  );}

export default AddToCart
