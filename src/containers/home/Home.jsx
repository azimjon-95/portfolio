import React from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Azimjon
          <br />
          MERN stack developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigate}>Hire me</button>
          <button>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
