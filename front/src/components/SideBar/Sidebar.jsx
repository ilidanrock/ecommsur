import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Sidebar.module.css";
import * as AiIcons from "react-icons/ai";
import { ProductInCart } from "../Cart/ProductInCart";

export const Sidebar = ({ cartItems, sidebar, setSidebar }) => {
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className={s.equis}>
        <Link to="#" className={s.menuopen}>
          <AiIcons.AiOutlineClose onClick={showSideBar} />
        </Link>
        <h2>Your Shopping cart</h2>
      </div>
      {cartItems?.map((product) => (
        <ProductInCart item={product} key={product._id} />
      ))}
    </div>
  );
};
