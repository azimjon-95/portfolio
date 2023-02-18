import React from "react";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { personalData } from "../../utils/forMe";
import { Animate } from "react-simple-animate";

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
            duration={1.5}
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
              {personalData?.map((value, inx) => {
                return (
                  <li key={inx}>
                    <span className="title">{value.text}</span>
                    <span className="value">{value.title}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper"></div>
      </div>
    </section>
  );
};

export default About;
