import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="style" className="style">
      <Header headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Skills;
