import React from "react";
import s from "./styles/ProductInCart.module.css";
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";

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
      <div className={s.wrapperImageName}>
        <figure className={s.wrapperFigure}>
          <img
            src={`http://localhost:5000${item.image}`}
            alt={`${item.name}`}
            className={s.image}
          />
        </figure>
        <div className={s.containerNameImageItem}>
          <div className={s.containerNamePrice}>
            <h4>{item.name}</h4>
            <span className={s.priceText}>Price: ${item.price}</span>
          </div>

          <div className={s.information}>
            {/* <p>Total: ${(item.amount * item.price).toFixed(2)}</p> */}
            <div className={s.buttons}>
              <button
                className={s.buttonsItem}
                onClick={() => handleRemoveFromCart(item._id)}
              >
                <FaMinus />
              </button>
              <small className={s.spanAmount}>{item.amount}</small>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={disable()}
                className={s.buttonsItem}
              >
                <FaPlus />
              </button>
            </div>
            <button
              className={s.buttonsItemRemove}
              onClick={() => removeItemfromCart(item._id)}
            >
              <FaRegTrashAlt className={s.iconFaRegTrashAlt} />
              <small>Remove</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
