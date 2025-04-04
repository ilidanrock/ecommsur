
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./styles/Card.module.css";
import { FaRegEye, FaStar, FaPlusCircle } from 'react-icons/fa';


export const Card = ({ product, handleAddToCart, cartItems }) => {
  const { image, numReviews, price, name, _id } = product;

  const [disable, setdisable] = useState(false);

  useEffect(() => {
    let item = cartItems.find((ele) => ele._id === product._id);

    if (item && item.countInStock < 1) {
      setdisable(true);
    }
  }, [cartItems, product._id]);

  return (
    <section>
      <div className={s.card}>
        <Link className={s.cardLinkDetails} to={`/product/${_id}`}>
          <div className={s.cardReviewItem}>
          <FaRegEye className={s.iconFontFaRegEye}/>
            <span className= {s.spanReviewsItem}>{numReviews}</span>
          </div>
          <figure>
            <img
              src={`${image}`}
              alt={`product name is ${name}`}
            />
          </figure>
        </Link>
        <div className={s.containerDetailsItem}>
          <div className={s.containerDescriptionItem}>
            <figcaption className={s.figcaption}>{name}</figcaption>
            <h3>'$'{price}</h3>
          </div>
          <div className={s.containerButton}>
            <div className={s.containerIconFaStar}>
            <FaStar className={s.iconFontFaStar}/>
            <span>{product.rating}</span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={disable || !product.countInStock}
              className={s.containerButtonAddItem}
            >
              <FaPlusCircle  className={s.iconFontFaPlusCircle}/>
              <small className={s.textButtonAdd}>
              Add to car
              </small>
             
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
