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

const About = () => {
  return (
    <section id="about" className="about">
      <Header headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>MERN stack Developer</h3>
            {personalData?.map((value, inx) => {
              return <p key={inx}>{value.jobSummary}</p>;
            })}
          </Animate>

          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalText">Personal Information</h3>
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
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
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
