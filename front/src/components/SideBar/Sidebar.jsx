import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Sidebar.module.css";
import * as AiIcons from "react-icons/ai";
import { ProductInCart } from "../Cart/ProductInCart";

export const Sidebar = ({
  cartItems,
  sidebar,
  setSidebar,
  handleAddToCart,
  handleRemoveFromCart,
  removeItemfromCart
}) => {
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className={s.equis}>
        <Link to="#" className={s.menuopen}>
          <AiIcons.AiOutlineClose onClick={showSideBar} />
        </Link>
        <h2>Your Shopping Cart</h2>
      </div>
      {cartItems?.map((product) => (
        <ProductInCart
          item={product}
          key={product._id}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          removeItemfromCart={removeItemfromCart}
        />
      ))}
    </div>
  );
};
