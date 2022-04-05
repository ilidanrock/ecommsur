import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./styles/Navbar.module.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className={s.navbar}>
        <Link to="#" className={s.menubars}>
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className={s.navbarMenuItems}>
          <li className={s.navbarToggle}>
            <Link to="#" className={s.menubars}>
                <AiIcons.AiOutlineClose/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
