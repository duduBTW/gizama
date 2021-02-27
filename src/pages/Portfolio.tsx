import { motion, Variants } from "framer-motion";
import React from "react";

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

export default function Portfolio() {
  const items = ["a", "b", "c", "d", "e"];
  return (
    <PortfolioContainer>
      <Background />
      <Header />
      <Dividers />
      <div className="container-content">
        {items.map((item) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
    </PortfolioContainer>
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
        transition={{ delay: 1 }}
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
  return (
    <>
      <motion.div
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
        className="background3"
      />
    </>
  );
}
