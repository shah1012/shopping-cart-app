import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";

import Navbar from "../components/Navbar";

import db from "../firebase";

import "./Cart.css";
function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    db.collection("items").onSnapshot((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() })));
    });
  }, []);

  //useEffect tp check all the total!
  useEffect(() => {
    db.collection("items").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let newTotal = 0;
          snapshot.forEach((doc) => {
            const docData = doc.data();
            const price = docData.price;
            newTotal += price;
          });
          setTotal(newTotal);
        }

        if (change.type === "removed") {
          let newTotal = 0;
          snapshot.forEach((doc) => {
            const docData = doc.data();
            const price = docData.price;
            newTotal += price;
          });
          setTotal(newTotal);
        }
      });
    });
  }, []);

  return (
    <div>
      <Navbar isCart="true" />
      <div className="cartContainer">
        <div className="cart__div">
          {items.map(({ id, item }) => (
            <CartItem key={id} item={item} id={id} className="cart__item" />
          ))}
        </div>

        <div className="totalContainer">
          <h2>{`Total: $${total}`}</h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
