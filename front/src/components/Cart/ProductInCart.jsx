import React from "react";
import s from "./styles/ProductInCart.module.css";

export const ProductInCart = ({
  item,
  handleRemoveFromCart,
  handleAddToCart,
  removeItemfromCart,
}) => {
  const disable = () => {
    if (item.countInStock > 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className={s.wrapper}>
      <div>
        <h3>{item.name}</h3>
        <div className={s.information}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className={s.buttons}>
          <button onClick={() => handleRemoveFromCart(item._id)}>-</button>
          <p>{item.amount}</p>
          <button onClick={() => handleAddToCart(item)} disabled={disable()}>
            +
          </button>
        </div>
        <button onClick={() => removeItemfromCart(item._id)}>Remove</button>
      </div>
      <figure>
        <img
          src={`http://localhost:5000${item.image}`}
          alt={`${item.name}`}
          className={s.image}
        />
      </figure>
    </div>
  );
};
