import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <Header headerText="My Resume" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Resume;
