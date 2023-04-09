import React from "react";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { FaDev, FaDatabase, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const date = new Date();
  return (
    <section id="about" className="about">
      <Header
        headerText={t("about.about")}
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-300px)",
              opacity: 0,
            }}
            end={{
              transform: "translateX(0px)",
              opacity: 1,
            }}
          >
            <div className="stack">
              <h3>{t("about.title")}</h3>
              <p>{t("forMe.title")}</p>;
            </div>
          </Animate>

          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(-300px)",
              opacity: 0,
            }}
            end={{
              transform: "translateX(0px)",
              opacity: 1,
            }}
          >
            <h3 className="personalText">{t("about.info")}</h3>
            <ul>
              <li>
                <span className="title">{t("forMe.name")}:</span>
                <span className="value">Azimjon Mamutaliev</span>
              </li>
              <li>
                <span className="title">{t("forMe.Age")}:</span>
                <span className="value">{date.getFullYear() - 1995}</span>
              </li>
              <li>
                <span className="title">{t("forMe.Address")}:</span>
                <span className="value">Uzbekistan Namangan</span>
              </li>
              <li>
                <span className="title">{t("forMe.Email")}:</span>
                <span className="value">mamutaliyev95@gmail.com</span>
              </li>
              <li>
                <span className="title">{t("forMe.Contact")}:</span>
                <span className="value">+998 94 432 44 54</span>
              </li>
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(300px)",
              opacity: 0,
            }}
            end={{
              transform: "translatex(0px)",
              opacity: 1,
            }}
          >
            <div className="about_content_servicesWrapper_innerContent">
              <div>
                <FaDev size={60} color="var(--color-main)" />
              </div>
              <div>
                <FaDatabase size={50} color="var(--color-main)" />
              </div>
              <div>
                <FaCss3Alt size={60} color="var(--color-main)" />
              </div>
              <div>
                <SiJavascript size={50} color="var(--color-main)" />
              </div>
              <div>
                <GrReactjs size={60} color="var(--color-main)" />
              </div>
              <div>
                <IoLogoNodejs size={60} color="var(--color-main)" />
              </div>
              <div>
                <DiPostgresql size={70} color="var(--color-main)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
