import React from "react";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { personalData } from "../../utils/forMe";
import { Animate } from "react-simple-animate";
import { FaDev, FaDatabase, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

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
              {personalData?.map((value, inx) => {
                return <p key={inx}>{value.jobSummary}</p>;
              })}
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
              {personalData?.slice(0, 5).map((value, inx) => {
                return (
                  <li key={inx}>
                    <span className="title">{value.text}:</span>
                    <span className="value">{value.title}</span>
                  </li>
                );
              })}
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
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
