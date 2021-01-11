import React from "react";
import db from "../firebase";

import "./CartItem.css";
function CartItem({ item, id }) {
  //removes data from the database
  const handleRemove = (event, docId) => {
    db.collection("items")
      .doc(`${docId}`)
      .delete()
      .then(() => {
        console.log("Successfully deleted the data!");
      });
  };

  return (
    <div className="cartItem__div">
      <img src={item.img} alt="" className="cartItem__img" />
      <h2 className="cartItem__title">{item.title}</h2>
      <p className="cartItem__price">{`$${item.price}`}</p>
      <button onClick={(event) => handleRemove(event, id)}>remove</button>
    </div>
  );
}

export default CartItem;
