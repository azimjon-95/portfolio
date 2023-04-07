import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { SiWebflow } from "react-icons/si";
import { allProjects } from "../../utils/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <Header headerText="My Portfolio" icon={<SiWebflow size={40} />} />

      <h1 className="portfolio_text">All projects</h1>
      <div className="portfolio_Cont">
        {allProjects?.map(({ name, image, link }, inx) => {
          return (
            <a href={link} key={inx} className="portfolio_Cont_product">
              <a href="">Project {name}</a>
              <img src={image} alt="" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
