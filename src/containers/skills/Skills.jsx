import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import { TbBrandJavascript, TbBrandFirebase } from "react-icons/tb";
import { MdReduceCapacity } from "react-icons/md";
import {
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSwagger,
  SiPostgresql,
} from "react-icons/si";
import { Animate } from "react-simple-animate";

const Skills = () => {
  return (
    <section id="style" className="style">
      <Header headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-900px)",
          opacity: "0",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="style_box">
          <div className="style_box_wrapper">
            <h2>FRONTEND</h2>
            <ul>
              <li>
                <FaHtml5 />
                HTML-5
              </li>
              <li>
                <FaCss3Alt />
                CSS-3
              </li>
              <li>
                <SiTailwindcss />
                TAILWIND
              </li>
              <li>
                <FaBootstrap />
                BOOTSTRAP
              </li>
              <li>
                <TbBrandJavascript />
                JAVASCRIPT ES6
              </li>
              <li>
                <FaReact />
                REACT.JS
              </li>
              <li>
                <SiStyledcomponents />
                STYLE-COMPONENT
              </li>
              <li>
                <MdReduceCapacity />
                REDUX-TOOLKIT
              </li>
            </ul>
          </div>
          <div className="style_box_wrapper">
            <h2>BACKEND</h2>
            <ul>
              <li>
                <FaNodeJs />
                NODE.JS
              </li>
              <li>
                <SiExpress />
                EXPRESS.JS
              </li>
              <h2>DATABASE</h2>
              <li>
                <SiMongodb />
                MONGODB
              </li>
              <li>
                <SiPostgresql />
                POSTGREsQL
              </li>
            </ul>
          </div>

          <div className="style_box_wrapper">
            <h2>TESTING</h2>
            <ul>
              <li>
                <TbBrandFirebase />
                FIREBASE
              </li>
              <li>
                <SiPostman />
                POSTMAN
              </li>
              <li>
                <SiSwagger />
                SWAGGER
              </li>
            </ul>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Skills;
