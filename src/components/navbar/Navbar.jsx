import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { navData } from "../../utils/navbar";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { SiCodeproject } from "react-icons/si";
import { RxResume } from "react-icons/rx";
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
          <ul className="navbar_conatiner_menu">
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
          {/* <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div> */}
        </div>
        <ul className="navbar_mobil_menu ">
          <Link className="navbar_mobil_menu_item" to="/about">
            <b>
              <BsInfoCircle />
            </b>
            <p className="navbar_mobil_menu_item">ABOUT ME</p>
          </Link>
          <Link className="navbar_mobil_menu_item" to="/skills">
            <b>
              <GiSkills />
            </b>
            <p className="navbar_mobil_menu_item">SKILLS</p>
          </Link>
          <Link className="navbar_mobil_menu_item  Home-menu" to="/">
            <b>
              <AiOutlineHome />
            </b>
            <p className="navbar_mobil_menu_item">HOME</p>
          </Link>
          <Link className="navbar_mobil_menu_item" to="/resume">
            <b>
              <RxResume />
            </b>
            <p className="navbar_mobil_menu_item">RESUME</p>
          </Link>
          <Link className="navbar_mobil_menu_item" to="/portfolio">
            <b>
              <SiCodeproject />
            </b>
            <p className="navbar_mobil_menu_item">PROJECTS</p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default memo = Navbar;
