import React, { memo, useEffect, useState } from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { NavLink, useNavigate } from "react-router-dom";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiOutlineWechat,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import Resume from "../../assets/img/resume.jpg";
import { useTranslation } from "react-i18next";

const Home = ({ toggleIcon }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate("/contact");
  };

  const view = Math.floor(Math.random() * 1000);

  return (
    <>
      <section id="home" className={`home ${toggleIcon ? "active" : ""}`}>
        <div className="home_text-wrapper">
          <h1>
            {t("home.text1")}
            <br />
            {t("home.text2")}
          </h1>
        </div>
        <Animate
          play
          duration={3.5}
          delay={1}
          start={{
            opacity: "0",
          }}
          end={{
            opacity: "1",
          }}
        >
          <div className="home_contact-me">
            <a onClick={handleNavigate}>
              {t("home.contact")} <AiOutlineWechat />
            </a>
            <a className="home_contact-me_download" href={Resume}>
              <img src={Resume} alt="Resume" />
              {t("home.down")} <AiOutlineCloudDownload />
            </a>
          </div>
        </Animate>
        <Animate
          play
          duration={4.5}
          delay={1}
          start={{
            opacity: "0",
          }}
          end={{
            opacity: "1",
          }}
        >
          <div className="home_contact-me_box">
            <div className="home_contact-me_box_link">
              <a href="https://www.instagram.com/invites/contact/?i=1u52w3nkvjgd8&utm_content=n9sgbj">
                <BsInstagram />
              </a>
              <a href="http://t.me/azimjon_m">
                <BsTelegram />
              </a>
              <a href="https://www.linkedin.com/in/azimjon-mamutaliyev-a19878266/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/azimjon-95">
                <BsGithub />
              </a>
            </div>

            <div className="home_contact-me_box_eye">
              <FiEye />
              {view}
            </div>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default memo = Home;
