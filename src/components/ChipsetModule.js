import React from 'react'
// import ChipsetSection from "./components/ChipsetSection";

function ChipsetModule(props) {

  return (
    
      <div className="product-box">
      <img src={`images/${props.photo}`} alt={props.name} />
        <h3>{props.name}</h3>
      
        <button onClick={props.Open}>Add to Cart</button>
      </div>
  );
}

export default ChipsetModule
