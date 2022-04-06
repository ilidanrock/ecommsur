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
  const calculateTotal = (items) => 
    items.reduce((ack, item)=> ack + item.amount * item.price, 0)

  return (
    <div>
      <div className={s.equis}>
        <Link to="#" className={s.menuopen}>
          <AiIcons.AiOutlineClose onClick={showSideBar} />
        </Link>
        <h2>Your Shopping Cart</h2>
        
      </div>
      {cartItems.length === 0? <p>No items in cart</p>: null}
      {cartItems?.map((product) => (
        <ProductInCart
          item={product}
          key={product._id}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          removeItemfromCart={removeItemfromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed((2))}</h2>
    </div>
  );
};
