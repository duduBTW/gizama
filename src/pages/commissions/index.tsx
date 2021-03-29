import { motion } from "framer-motion";
import React from "react";
import ImageChanger from "../imageChanger";
import { CommissionsContainer } from "./styles";
import content from "../../data";

export default function Commissions({ idioma }: { idioma: "en" | "pt" }) {
  console.log(JSON.stringify(content));
  const data = content[idioma];
  const list = data.com.list;

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
          <ImageChanger images={data.com.header.example} />
          {/* <motion.img
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            src="https://i.imgur.com/C2p79XQ.jpg"
            alt=""
          /> */}
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
        <h2 className="price">Live2D</h2>
        <div className="item-container">
          {list.map((listItem: any) => (
            <div className="item">
              <ul>
                {listItem.items.map((item: any) => (
                  <li>{item}</li>
                ))}
              </ul>
              <motion.div
                className="porc"
                animate={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <h4>{listItem.porc}</h4>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer-lg"></div>
      <div className="actions">
        <motion.div
          animate={{
            background: "#3a3c64",
          }}
          whileHover={{
            background: "#23243b",
          }}
          className="action"
        >
          <b>Interested?</b> click here and enter in contact
        </motion.div>
        <div className="separator"></div>
      </div>
    </CommissionsContainer>
  );
}
