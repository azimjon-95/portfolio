import React, { memo, useEffect, useState } from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { NavLink, useNavigate } from "react-router-dom";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineWechat } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import Resume from "../../assets/img/resume.jpg";
import { useTranslation } from "react-i18next";
import goo from "../../assets/img/re.jpg";
import goo1 from "../../assets/img/re2.jpg";
import goo2 from "../../assets/img/re3.jpg";
import goo3 from "../../assets/img/re4.jpg";
import goo4 from "../../assets/img/re5.png";
import goo5 from "../../assets/img/re6.jpg";
import goo6 from "../../assets/img/re7.jpg";
import mob1 from "../../assets/img/mob1.jpg";
import mob2 from "../../assets/img/mob2.jpg";
import mob3 from "../../assets/img/mob3.jpg";
import mob4 from "../../assets/img/mob4.jpg";
import mob5 from "../../assets/img/mob5.jpg";
import mob6 from "../../assets/img/mob6.jpg";
import mob7 from "../../assets/img/mob7.jpg";
import mob8 from "../../assets/img/mob8.jpg";
import mob9 from "../../assets/img/mob9.jpg";
import mob10 from "../../assets/img/mob10.jpg";
import Bg from '../../assets/eee.mp4'

const dataImgs = [goo, goo1, goo2, goo3, goo4, goo5, goo6];
const MobImgs = [mob1, mob2, mob3, mob4, mob5, mob6, mob7, mob8, mob9, mob10, Bg];




const Home = ({ toggleIcon }) => {


  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleNavigate = () => {
    navigate("/contact");
  };

  const [state, setState] = useState(0);
  const [mob, setSmob] = useState(0);

  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * dataImgs.length);
    setState(randomNumber);
  };
  useEffect(() => {
    changeImage();
  }, []);

  const changeImagemob = () => {
    const randomNumber = Math.floor(Math.random() * MobImgs.length);
    setSmob(randomNumber);
  };
  useEffect(() => {
    changeImagemob();
  }, []);

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
            <a
              className="home_contact-me_download"
              href="https://www.canva.com/design/DAFbl_hB-Rk/9NYeEQVu1KZmPx8sqJUWiQ/view?utm_content=DAFbl_hB-Rk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
            // href="https://www.canva.com/design/DAFbl_hB-Rk/9NYeEQVu1KZmPx8sqJUWiQ/view?utm_content=DAFbl_hB-Rk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            >
              <img src="" alt="Resume" />
              {t("home.down")} <FiArrowUpRight />
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
      <img className="ddd" src={dataImgs[state]} alt="" />
      {
        mob === MobImgs.length - 1 ?
          <video controls muted loop autoPlay className="mob" src={MobImgs[mob]}></video>
          :

          <img className="mob" src={MobImgs[mob]} alt="" />
      }

      <div className="blur"></div>
    </>
  );
};

export default memo = Home;
