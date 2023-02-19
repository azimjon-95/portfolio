import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { navData } from "../../utils/navbar";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import logo from "../../assets/icons/logo.png";
import { Animate } from "react-simple-animate";

const Navbar = ({ toggleIcon, setToggleIcon }) => {
  const handleToggleIcon = () => {
    setToggleIcon((i) => !i);
  };
  return (
    <div className="Conatiner">
      <nav className={`navbar ${toggleIcon ? "active" : ""}`}>
        <div className="navbar_Box">
          <div className="navbar_conatiner">
            <Link className="navbar_conatiner_logo" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className={`navbar_conatiner_menu ${toggleIcon ? "active" : ""}`}>
            {navData?.map((value, inx) => {
              return (
                <Link
                  key={inx}
                  className="navbar_conatiner_menu_item_links"
                  to={value?.to}
                >
                  <li className="navbar_conatiner_menu_item">{value?.name}</li>
                </Link>
              );
            })}
          </ul>
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        <ul className={`navbar_mobil_menu ${toggleIcon ? "active" : ""}`}>
          {navData?.map((value, inx) => {
            return (
              <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                  transform: "translateY(550px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
                key={inx}
              >
                <Link
                  className="navbar_mobil_menu_item_links"
                  to={value?.to}
                  onClick={() => setToggleIcon(false)}
                >
                  <li className="navbar_mobil_menu_item">{value?.name}</li>
                </Link>
              </Animate>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default memo = Navbar;
