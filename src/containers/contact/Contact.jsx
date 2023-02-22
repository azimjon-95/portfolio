import React, { useState } from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Animate } from "react-simple-animate";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    message: "",
    tel: "+998",
  });

  const sendMsgToBot = async () => {
    let myText = `<b>PORTFOLIO</b>%0A%0A`;
    myText += `ismi: <b>${user.name}</b>%0A`;
    myText += `tel: <b>${user.tel}</b>%0A`;
    myText += `xabar: <b>${user.message}</b>%0A`;

    let tokenBot = "6230509348:AAHqIOcv8e6rUeikjKdc27-H1rMw1oLux0k";
    let chatId = "39464759";

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${myText}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();
  };

  return (
    <section id="contact" className="contact">
      <Header
        headerText="My Contact"
        icon={<BiMessageRoundedDetail size={40} />}
      />

      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact_content_header-text">Let's Tolk</h3>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_controlsWrapper">
              <div className="nameWrapper">
                <input
                  required
                  value={user.name}
                  onChange={({ target }) =>
                    setUser({ ...user, name: target.value })
                  }
                  type={"text"}
                  name="name"
                  className="inpName"
                />
                <label htmlFor="namr" className="nameLable">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input
                  required
                  type={"tel"}
                  value={user.tel}
                  onChange={({ target }) =>
                    setUser({ ...user, tel: target.value })
                  }
                  className="inpEmail"
                />
                <label htmlFor="email" className="emailLable">
                  Tel
                </label>
              </div>
              <div className="descWrapper">
                <textarea
                  type={"email"}
                  value={user.message}
                  onChange={({ target }) =>
                    setUser({ ...user, message: target.value })
                  }
                  className="inpDesc"
                  rows="5"
                />
                <label htmlFor="desc" className="descLable">
                  Description
                </label>
              </div>
            </div>
            <button onClick={() => sendMsgToBot()}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
