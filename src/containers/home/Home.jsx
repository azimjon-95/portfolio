import React, { memo } from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { PDFDownloadLink } from "@react-pdf/renderer";
import loptop from "../../assets/img/loptop.png";
const Home = ({ toggleIcon }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className={`home ${toggleIcon ? "active" : ""}`}>
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Azimjon
          <br />
          MERN stack developer
        </h1>
      </div>
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
      >
        <div className="home_contact-me">
          <a onClick={handleNavigate}>Hire me</a>
          <a href={loptop} download="loptop">
            <img src={loptop} alt="loptop" />
            Download Resume
          </a>
        </div>
      </Animate>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(1800px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home_contact-me_link">
          <BsInstagram />
          <BsTelegram />
          <AiFillLinkedin />
          <BsGithub />
        </div>
      </Animate>
    </section>
  );
};

export default memo = Home;
