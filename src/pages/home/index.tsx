import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button, HomeContainer, ItemStyle } from "./styles";
import discordIcon from "../../assets/discordIcon.svg";
import { useInView } from "react-intersection-observer";

function FadeInWhenVisible({ children }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    console.log("inView", inView);
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, mass: 0.4 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <div className="spacer-lg"></div>
      <Info />

      <div className="spacer-lg" />
      <Contact />

      <div className="spacer-lg"></div>

      <div className="banner">
        <motion.div className="banner-container">
          <img
            style={{ marginTop: 120 }}
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />

          <img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          <img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          <img
            style={{ marginBottom: 120 }}
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          <img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          <img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          <img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          <img
            style={{ marginBottom: 120 }}
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
          {/* <img src={banner} alt="" /> */}
        </motion.div>
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
        <div className="h1-container">
          <motion.h1
            initial={{
              x: -200,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              mass: 0.1,
            }}
          >
            Title
          </motion.h1>
        </div>
        <div className="p-container">
          <motion.p
            initial={{
              x: -700,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              mass: 0.1,
              delay: 0.1,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </motion.p>
        </div>

        <Button
          animate={{
            scale: [1, 1.05, 1.1, 1.15, 1],
            rotate: [0, 2.5, -2.5, 2.5, 0],
            // x: 0,
            background: "#3a3c64",
            transition: {
              type: "spring",
              delay: 0.25,
            },
          }}
          whileHover={{
            background: "#23243b",
          }}
          className="button"
        >
          Enter in Contact
        </Button>
      </div>
      <div className="spacer"></div>
      <div className="rigth">
        <div className="imgcontainer">
          <motion.img
            src="https://i1.wp.com/peachsalmanac.com/wp-content/uploads/2017/08/hifumi-new-game-social-anxiety.jpg?resize=620%2C356&ssl=1"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

function Info() {
  const [drag, setDrag] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    console.log("inView", inView);
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} className="info">
      <motion.div className="line" />

      <motion.div
        drag="x"
        animate={
          drag
            ? {
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
              }
            : {}
        }
        // variants={}
        style={{ zIndex: 3 }}
        dragConstraints={{ left: 0, right: 0 }}
        className="left"
        onDragStart={() => setDrag(true)}
        onDragEnd={() => setDrag(false)}
      >
        <div className="title-container">
          <motion.h2
            transition={{
              mass: 0.4,
            }}
            variants={{
              visible: {
                y: 0,
              },
              hidden: {
                y: 100,
              },
            }}
          >
            TITLE 2
          </motion.h2>
        </div>
        <div className="p-container">
          <motion.p
            variants={{
              visible: {
                y: 0,
              },
              hidden: {
                y: 200,
              },
            }}
            transition={{
              delay: 0.04,
              mass: 0.4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniamadipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolor
          </motion.p>
        </div>
      </motion.div>
      <div className="spacer" />
      <div className="rigth">
        <motion.div className="img-container">
          <motion.div
            className="img"
            initial="hidden"
            // animate={{
            //   x: -10,
            //   y: -10,
            //   transition: {
            //     delay: 0.2,
            //   },
            // }}
            variants={{
              visible: {
                x: -10,
                y: -10,
                backgroundSize: "100%",
                transition: {
                  delay: 0.1,
                  mass: 0.5,
                },
              },
              hidden: {
                x: 0,
                y: 0,
                backgroundSize: "120%",
                transition: {
                  delay: 0.1,
                  mass: 0.5,
                },
              },
            }}
          />
        </motion.div>
      </div>
    </motion.div>
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

export function ContactItem() {
  return (
    <ItemStyle>
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
    </ItemStyle>
  );
}

function Interested() {
  const [drag, setDrag] = useState(false);

  return (
    <div className="interested">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="left"
        animate={
          drag
            ? {
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
              }
            : {}
        }
        onDragStart={() => setDrag(true)}
        onDragEnd={() => setDrag(false)}
      >
        <div className="title">
          <h4>Interested?</h4>
        </div>
      </motion.div>

      <div className="spacer" />

      <div className="rigth">
        <Button
          animate={{
            background: "#3a3c64",
          }}
          whileHover={{
            background: "#23243b",
          }}
          className="button"
        >
          Enter in Contact
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
