import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import React from "react";
import Modal from "../tests/Modal";

import { PortfolioContainer } from "./styles";

const variants: Variants = {
  from: {
    x: 0,
    y: 0,
  },
  to: {
    x: -10,
    y: -10,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    x: 0,
    y: 0,
  },
};

const slashMotion: Variants = {
  rest: { height: 0, opacity: 0 },
  hover: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.25,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export default function Portfolio() {
  const items = ["a", "b", "c", "d", "e"];
  const [isVisible, setVisible] = React.useState(false);

  function toggle() {
    setVisible(!isVisible);
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <Modal />
          // <motion.div
          //   style={{
          //     width: 1080,
          //     height: 1080,
          //     borderRadius: 15,
          //     backgroundColor: "white",
          //     position: "fixed",
          //     zIndex: 99,
          //   }}
          //   initial={{ opacity: 0, scale: 0.75 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   exit={{ opacity: 0, scale: 0 }}
          // />
        )}
      </AnimatePresence>
      <PortfolioContainer>
        <Background />
        <Header />
        <Dividers />
        <div className="container-content">
          {items.map((_, index) => (
            <motion.div
              key={index}
              onClick={toggle}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="port-item"
            >
              <motion.img
                variants={variants}
                initial="from"
                whileHover="hover"
                animate="to"
                src="https://i.ytimg.com/vi/GsO9YDaCPD0/maxresdefault.jpg"
                alt="a"
              />
              <motion.div variants={slashMotion} className="hover">
                Click to open
              </motion.div>
            </motion.div>
          ))}
        </div>
      </PortfolioContainer>
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <motion.h1
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
        transition={{ delay: 0.6 }}
      >
        PORTFOLIO
      </motion.h1>
    </div>
  );
}

function Dividers() {
  return (
    <>
      <motion.div
        initial={{
          right: "80vw",
        }}
        animate={{
          right: 0,
        }}
        transition={{ type: "tween", duration: 1 }}
        className="divider-port"
      />
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: 700,
        }}
        transition={{ type: "tween", duration: 1 }}
        className="divider-content-first"
      />
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: 700,
        }}
        transition={{ type: "tween", duration: 1 }}
        className="divider-content-second"
      />{" "}
    </>
  );
}

function Background() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 150]);
  const y2 = useTransform(scrollY, [0, 600], [0, -150]);

  return (
    <>
      <motion.div
        style={{ y: y1 }}
        animate={{
          x: ["0%", "50%", "0%"],
          transition: {
            repeat: Infinity,
            duration: 42,
          },
        }}
        className="background1"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{
          x: ["0%", "-50%", "0%"],
          transition: {
            repeat: Infinity,
            duration: 42,
          },
        }}
        className="background2"
      />
      <motion.div
        animate={{
          x: ["0%", "50%", "0%"],
          transition: {
            repeat: Infinity,
            duration: 42,
          },
        }}
        style={{ y: y1 }}
        className="background3"
      />
    </>
  );
}
