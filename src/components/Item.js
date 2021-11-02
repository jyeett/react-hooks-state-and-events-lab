import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false)

  function cartButton() {
    setInCart(!inCart)
  }
  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartButton}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
