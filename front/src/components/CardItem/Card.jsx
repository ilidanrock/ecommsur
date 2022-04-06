import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./styles/Card.module.css";

export const Card = ({ product, handleAddToCart, cartItems }) => {
  const { image, numReviews, price, name , _id } = product;

  const [disable, setdisable] = useState(false);

  useEffect(() => {
    let item = cartItems.find((ele) => ele._id === product._id);
    console.log("ITEM", item);
    if (item && item.countInStock < 1) {
      setdisable(true);
    }
  }, [cartItems, product._id]);


  return (
    <section>
      <div className={s.card}>
        <Link to={`/product/${_id}`}>
          <figure>
            <img
              src={`http://localhost:5000${image}`}
              alt={`product name is ${name}`}
            />
          </figure>
        </Link>
        <figcaption>{name}</figcaption>

        <span>{numReviews}</span>
        <h3>'$'{price}</h3>
        <button
          onClick={() => handleAddToCart(product)}
          disabled={disable || !product.countInStock}
        >
          Add item to cart
        </button>
      </div>
    </section>
  );
};
