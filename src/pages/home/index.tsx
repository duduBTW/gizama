import { motion } from "framer-motion";
import React from "react";
import { HomeContainer } from "./styles";
import banner from "../../assets/banner.png";
import discordIcon from "../../assets/discordIcon.svg";

function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <div className="spacer-lg"></div>
      <Info />
      <div className="spacer-lg"></div>
      <Contact />
      <div className="spacer-lg"></div>

      <div className="banner">
        <div className="banner-container">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="spacer-lg"></div>
      <Interested />
      <div className="spacer-lg"></div>
    </HomeContainer>
  );
}

function Header() {
  return (
    <header>
      <div className="left">
        <h1>TITLE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <button className="button">Order</button>
      </div>
      <div className="spacer"></div>
      <div className="rigth">
        <div className="imgcontainer">
          <img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

function Info() {
  return (
    <div className="info">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="left"
      >
        <h2>TITLE 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniamadipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolor
        </p>
      </motion.div>
      <div className="spacer" />
      <div className="rigth">
        <motion.div className="img-container">
          <motion.img
            initial={{
              x: 0,
              y: 0,
            }}
            animate={{
              x: -10,
              y: -10,
            }}
            whileHover={{
              x: 0,
              y: 0,
            }}
            src="https://www.live2d.com/wp/wp-content/themes/cubism_wpml/img/index-function-img_01.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <ContactItem />
      </div>
      <div className="spacer"></div>
      <div className="rigth">
        <ContactItem />
      </div>
    </div>
  );
}

function ContactItem() {
  return (
    <div className="item">
      <motion.div
        initial={{
          x: 0,
          y: 0,
        }}
        animate={{
          x: -10,
          y: -10,
        }}
        whileHover={{
          x: 0,
          y: 0,
        }}
        className="content"
      >
        <div className="head">
          <label>
            {"DISCORD".split("").map((e) => (
              <span>{e}</span>
            ))}
          </label>
          <div className="icon">
            <img src={discordIcon} alt="" />
          </div>
        </div>
        <h3>TESTE#1234</h3>
      </motion.div>
    </div>
  );
}

function Interested() {
  return (
    <div className="interested">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="left"
      >
        <div className="title">
          <h4>Interested?</h4>
        </div>
      </motion.div>

      <div className="spacer" />

      <div className="rigth">
        <button className="button">Order</button>
      </div>
    </div>
  );
}

export default HomePage;
