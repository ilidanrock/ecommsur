import React from "react";
import axios from "axios";
import s from "./styles/Card.module.css";

export const Card = (props) => {
  const { id, image, numReviews, name , price } = props;

  const handleAddToCart = () => {

  }
  return (
    <section>
      <div className={s.card}>
        <figure>
          <img
            src={`http://localhost:5000${image}`}
            alt={`product name is ${name}`}

          />
        </figure>
        <figcaption>{name}</figcaption>
        <span>{numReviews}</span>
        <h3>'$'{price}</h3>
        <button onClick={()=>handleAddToCart()}>Add to cart</button>
      </div>
    </section>
  );
};
