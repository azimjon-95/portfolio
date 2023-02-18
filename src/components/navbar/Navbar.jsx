import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { navData } from "../../utils/navbar";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon((i) => !i);
  };
  return (
    <div className="Conatiner">
      <nav className="navbar">
        <div className="navbar_conatiner">
          <Link className="navbar_conatiner_logo" to="/">
            <BiChevronLeft className="navbar_conatiner_logo_left" /> AzimDev /{" "}
            <BiChevronRight className="navbar_conatiner_logo_right" />
          </Link>
        </div>
        <ul className={`navbar_conatiner_menu ${toggleIcon ? "active" : ""}`}>
          {navData?.map((value, inx) => {
            return (
              <li key={inx} className="navbar_conatiner_menu_item">
                <Link
                  className="navbar_conatiner_menu_item_links"
                  to={value?.to}
                >
                  {value?.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
