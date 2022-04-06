import React from "react";
import s from "./styles/Card.module.css";

export const Card = ({product, handleAddToCart}) => {
  const { image , numReviews , price , name } = product

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
        <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
      </div>
    </section>
  );
};
