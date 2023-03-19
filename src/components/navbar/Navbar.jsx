import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { navData } from "../../utils/navbar";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { SiCodeproject } from "react-icons/si";
import { RxResume } from "react-icons/rx";
import Uz from "../../assets/img/language_uzb.png";
import Ru from "../../assets/img/laguage_ru.png";
import Usa from "../../assets/img/language_usa.png";
import logo from "../../assets/icons/logo.png";
import { Animate } from "react-simple-animate";
import { useState } from "react";
import i18n from "../../language/i18next";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggleIcon, setToggleIcon }) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="Conatiner">
      <nav className={`navbar ${toggleIcon ? "active" : ""}`}>
        <div className="navbar_Box">
          <div className="navbar_conatiner">
            <Link className="navbar_conatiner_logo" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div onClick={() => setOpen(!open)} className="language">
            {open ? (
              <div
                onClick={() => i18n.changeLanguage("usa")}
                className="language_Img-box"
              >
                {" "}
                <img src={Uz} alt="" />
              </div>
            ) : (
              <div
                onClick={() => i18n.changeLanguage("uz")}
                className="language_Img-box"
              >
                {" "}
                <img src={Usa} alt="" />
              </div>
            )}
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
        </div>

        <ul className="navbar_mobil_menu ">
          <Link className="navbar_mobil_menu_item" to="/about">
            <b>
              <BsInfoCircle />
            </b>
            <p className="navbar_mobil_menu_item">{t("nav.about")}</p>
          </Link>

          <Link className="navbar_mobil_menu_item" to="/resume">
            <b>
              <RxResume />
            </b>
            <p className="navbar_mobil_menu_item">{t("nav.resume")}</p>
          </Link>
          <Link className="navbar_mobil_menu_item  Home-menu" to="/">
            <b>
              <AiOutlineHome />
            </b>
            <p className="navbar_mobil_menu_item">{t("nav.home")}</p>
          </Link>
          <Link className="navbar_mobil_menu_item" to="/skills">
            <b>
              <GiSkills />
            </b>
            <p className="navbar_mobil_menu_item">{t("nav.skills")}</p>
          </Link>
          <Link className="navbar_mobil_menu_item" to="/portfolio">
            <b>
              <SiCodeproject />
            </b>
            <p className="navbar_mobil_menu_item">{t("nav.projects")}</p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default memo = Navbar;
