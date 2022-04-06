import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "../NavBar/styles/Navbar.module.css";
import * as FaIcons from "react-icons/bi";
import { Sidebar } from "../SideBar/Sidebar";

export const Navbar = ({ handleRemoveFromCart, cartItems, getTotalItems , handleAddToCart , removeItemfromCart }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className={s.navbar}>
        <Link to="#" className={s.menubars}>
          <FaIcons.BiCartAlt onClick={showSideBar} className={s.icon} />
        </Link>
        <span className={s.icon}>{`( ${getTotalItems(cartItems)} )`}</span>
      </div>
      <nav className={sidebar ? s.navmenuopen : s.navmenu}>
        <Sidebar
          cartItems={cartItems}
          sidebar={sidebar}
          setSidebar={setSidebar}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          removeItemfromCart={removeItemfromCart}
        />
      </nav>
    </div>
  );
};
