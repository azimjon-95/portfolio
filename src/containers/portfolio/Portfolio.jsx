import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <Header headerText="My Portfolio" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Portfolio;
