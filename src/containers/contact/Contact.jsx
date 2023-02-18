import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Header headerText="My Contact" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Contact;
