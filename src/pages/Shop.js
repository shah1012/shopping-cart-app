import React, { useState } from "react";

import Navbar from "../components/Navbar";

import "./Shop.css";

import db from "../firebase";
function Main() {
  //States
  const [items, setItems] = useState([
    {
      image:
        "https://i.insider.com/5e38419b5bc79c4c7d4e1192?width=906&format=jpeg",
      title: "Nike Shoes",
      price: 100,
    },
    {
      image:
        "https://www.uscellular.com/content/dam/uscc-static/assets/commerce/catalog/devices/205782/images/iPhoneX-Svr-PureAngles_US-EN-SCREEN-large.png",
      title: "IPhone X",
      price: 339.99,
    },
    {
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1563892734-bedsure-sherpa-fleece-blanket-1563892702.jpg",
      title: "Blanked",
      price: 14,
    },
    {
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps4-overview-console-02-en-04sep18?$native--t$",
      title: "PS4",
      price: 299.99,
    },
  ]);

  const handleClick = (event, item) => {
    event.preventDefault();
    db.collection("items").add({
      img: item.image,
      title: item.title,
      price: item.price,
    });
  };

  return (
    <div className="shop__div">
      <Navbar />
      <div className="container">
        {items.map((item) => (
          <div className="item">
            <img src={item.image} alt="" className="item_img" />
            <h2 className="item__title">{item.title}</h2>
            <p className="item__price">{`$${item.price}`}</p>
            <button
              onClick={(event) => handleClick(event, item)}
              className="add"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
