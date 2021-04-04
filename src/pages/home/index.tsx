import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button, HomeContainer, ItemStyle } from "./styles";
import discordIcon from "../../assets/discordIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import { useInView } from "react-intersection-observer";
import content, { ItemProp } from "../../data";
import { useHistory } from "react-router";

function HomePage({ idioma }: { idioma: "en" | "pt" }) {
  const data = content[idioma];

  return (
    <HomeContainer>
      <Header data={data} />
      <div className="spacer-lg"></div>
      <Info data={data} />

      <div className="spacer-lg" />
      <Contact data={data} />

      <div className="spacer-lg"></div>

      <div className="banner">
        <motion.div className="banner-container">
          <motion.img
            initial={{ marginTop: 0 }}
            animate={{ marginTop: 120 }}
            src={data.home?.banner?.img1}
            alt=""
          />

          <img src={data.home?.banner?.img2} alt="" />
          <img src={data.home?.banner?.img3} alt="" />
          <motion.img
            initial={{ marginBottom: 0 }}
            animate={{ marginBottom: 120 }}
            src={data.home?.banner?.img4}
            alt=""
          />
          <img src={data.home?.banner?.img5} alt="" />
          <img src={data.home?.banner?.img6} alt="" />
          <img src={data.home?.banner?.img7} alt="" />
          <motion.img
            initial={{ marginBottom: 0 }}
            animate={{ marginBottom: 120 }}
            src={data.home?.banner?.img8}
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

function Header({ data }: { data: ItemProp }) {
  const { desc, title, url } = data.home.header;
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 250]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

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
            style={{ y: y1 }}
          >
            {title}
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
              delay: 0.1,
            }}
            style={{ y: y2 }}
          >
            {desc}
          </motion.p>
        </div>

        <Button
          animate={{
            scale: [1, 1.05, 1.1, 1.15, 1],
            rotate: [0, 2.5, -2.5, 2.5, 0],
            // x: 0,
            transition: {
              type: "spring",
              delay: 0.25,
            },
          }}
          className="button"
        >
          Enter in Contact
        </Button>
      </div>
      <div className="spacer"></div>
      <div className="rigth">
        <div className="imgcontainer">
          <motion.img src={url} alt="" />
        </div>
      </div>
    </header>
  );
}

function Info({ data }: { data: ItemProp }) {
  const { desc, img, title } = data.home.info;
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
            {title}
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
            {desc}
          </motion.p>
        </div>
      </motion.div>
      <div className="spacer" />
      <div className="rigth">
        <motion.div className="img-container">
          <motion.div
            className="img"
            initial="hidden"
            style={{
              backgroundImage: `url("${img}")`,
            }}
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

function Contact({ data }: { data: ItemProp }) {
  return (
    <div className="contact">
      <div className="left">
        <ContactItem
          icon={discordIcon}
          type="DISCORD"
          title={data.discord}
          url={data.discordUrl}
        />
      </div>
      <div className="spacer"></div>
      <div className="rigth">
        <ContactItem
          icon={twitterIcon}
          type="TWITTER"
          title={data.twitter}
          url={data.twitterUrl}
        />
      </div>
    </div>
  );
}

export function ContactItem({
  type,
  title,
  icon,
  url,
}: {
  type: string;
  title: string;
  icon: string;
  url: string;
}) {
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
        onClick={() => window.open(url, "_blank")}
      >
        <div className="head">
          <label>
            {type.split("").map((e, index) => (
              <span key={index}>{e}</span>
            ))}
          </label>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
        </div>
        <h3>{title}</h3>
      </motion.div>
    </ItemStyle>
  );
}

export function Interested() {
  const history = useHistory();
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
          onClick={() => history.push("/contact")}
          animate={{
            background: "#3a3c64",
          }}
          whileHover={{
            background: "#23243b",
          }}
          whileTap={{ scale: 0.9 }}
          className="button"
        >
          Enter in Contact
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
