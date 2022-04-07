import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Sidebar.module.css";
import * as AiIcons from "react-icons/ai";
import { ProductInCart } from "../Cart/ProductInCart";
import { FaCartPlus } from 'react-icons/fa';

export const Sidebar = ({
  cartItems,
  sidebar,
  setSidebar,
  handleAddToCart,
  handleRemoveFromCart,
  removeItemfromCart,
}) => {
  const showSideBar = () => setSidebar(!sidebar);
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  return (
    <div>
      <div className={s.equis}>
        <Link to="#" className={s.menuopen}>
          <AiIcons.AiOutlineClose onClick={showSideBar} />
        </Link>
        <h2>Your Shopping Car</h2>
      </div>
      {cartItems.length === 0 ? <div className={s.containerIconFaCartPlus}><FaCartPlus className={s.iconFaCartPlus}/><p>Your car is empty</p></div> : null}
      {cartItems?.map((product) => (
        <ProductInCart
          item={product}
          key={product._id}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          removeItemfromCart={removeItemfromCart}
        />
      ))}
      <span className={s.totalSellingPrice}>Total: ${calculateTotal(cartItems).toFixed(2)}</span>
    </div>
  );
};