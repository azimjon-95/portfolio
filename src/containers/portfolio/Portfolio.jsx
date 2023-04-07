import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { SiWebflow } from "react-icons/si";
import { allProjects } from "../../utils/projects";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="portfolio">
      <Header headerText={t("portfolio.info")} icon={<SiWebflow size={40} />} />

      <h1 className="portfolio_text">{t("portfolio.title")}</h1>
      <div className="portfolio_Cont">
        {allProjects?.map(({ name, image, link }, inx) => {
          return (
            <a href={link} key={inx} className="portfolio_Cont_product">
              <a href="">
                {t("portfolio.name")} {name}
              </a>
              <img src={image} alt="" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
