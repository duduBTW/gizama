import { motion } from "framer-motion";
import React from "react";
import { CommissionsContainer } from "./styles";

export default function Commissions() {
  const list = [
    {
      porc: 10,
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      ],
    },
    {
      porc: 20,
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      ],
    },
    {
      porc: 30,
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      ],
    },
  ];

  return (
    <CommissionsContainer>
      <motion.div
        animate={{
          right: ["30%", "0%", "30%"],
          transition: {
            repeat: Infinity,
            duration: 28,
          },
        }}
        className="background1"
      />
      <header>
        <motion.div
          animate={{
            width: ["100%", "0%", "100%"],
            transition: {
              repeat: Infinity,
              duration: 28,
              delay: 0.3,
            },
          }}
          className="background3"
        />

        <div className="exemple">
          <motion.div
            // animate={{
            //   right: ["0%", "30%", "0%"],
            //   transition: {
            //     repeat: Infinity,
            //     duration: 18,
            //   },
            // }}
            className="background2"
          />
          <motion.img
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            src="https://i.imgur.com/C2p79XQ.jpg"
            alt=""
          />
        </div>
        <div className="desc">
          <div>
            <div className="titleContainer">
              <motion.h1
                animate={{
                  y: 0,
                }}
                initial={{
                  y: 50,
                }}
                transition={{ type: "spring", mass: 0.3 }}
              >
                COMMISIONS
              </motion.h1>
            </div>
            <div className="pContainer">
              <motion.p
                animate={{
                  y: 0,
                }}
                initial={{
                  y: 200,
                }}
                transition={{ type: "spring", mass: 0.4, delay: 0.05 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniamadipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolor
              </motion.p>
            </div>
          </div>
        </div>
      </header>
      <div className="spacer-lg"></div>
      <div className="info">
        <h2 className="price">100</h2>
        <div className="item-container">
          {list.map((listItem) => (
            <div className="item">
              <ul>
                {listItem.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <div className="porc">
                <h4>{listItem.porc}%</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer-lg"></div>
      <div className="actions">
        <div className="action">
          <b>Interested?</b> click here and enter in contact
        </div>
        <div className="separator"></div>
      </div>
    </CommissionsContainer>
  );
}
