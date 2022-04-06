import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "../NavBar/styles/Navbar.module.css";
import * as FaIcons from "react-icons/fa";
import { Sidebar } from "../SideBar/Sidebar";

export const Navbar = ({ handleRemoveFromCart, cartItems }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className={s.navbar}>
        <Link to="#" className={s.menubars}>
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? s.navmenuopen : s.navmenu}>
        <Sidebar
          cartItems={cartItems}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      </nav>
    </div>
  );
};
