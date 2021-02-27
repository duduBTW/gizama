import { motion } from "framer-motion";
import React from "react";

export default function HeaderCommission() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative" }}>
        <h1
          style={{
            margin: "0px 0px 0px 100px",
            fontSize: 50,
          }}
        >
          COMMISSION
        </h1>
        <p
          style={{
            paddingLeft: 100,
            background: "#3A3C64",
            paddingTop: 50,
            paddingRight: 400,
            paddingBottom: 50,
            color: "#FFFFFF",
            fontSize: 26,
            marginRight: "25%",
            lineHeight: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div
          style={{
            position: "absolute",
            right: "10%",
            bottom: "-25%",
            overflow: "hidden",
          }}
        >
          <motion.img
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{
              maxHeight: 750,
            }}
            src="https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png"
            alt=""
          />
          <motion.div
            animate={{
              bottom: ["-5%", "-7.5%", "-5%"],
              transition: {
                repeat: Infinity,
                duration: 1.4,
              },
            }}
            whileHover={{
              x: "-10%",
              opacity: 0.6,
            }}
            style={{
              height: 80,
              //opacity: 0.6,
              width: "25%",
              background: "#3A3C64",
              bottom: "-5%",
              left: 0,
              position: "absolute",
            }}
          />
          <motion.div
            animate={{
              bottom: ["-7.5%", "-5%", "-7.5%"],
              transition: {
                repeat: Infinity,
                duration: 1.4,
              },
            }}
            whileHover={{
              x: "10%",
              opacity: 0.6,
            }}
            style={{
              height: 80,
              //opacity: 0.6,
              width: "25%",
              background: "#FDF2F4",
              bottom: "-7.5%",
              left: "20%",
              position: "absolute",
            }}
          />
          <motion.div
            animate={{
              bottom: ["-5%", "-7.5%", "-5%"],
              transition: {
                repeat: Infinity,
                duration: 1.4,
              },
            }}
            whileHover={{
              x: "10%",
              opacity: 0.6,
            }}
            style={{
              height: 80,
              //opacity: 0.6,
              width: "25%",
              background: "#3A3C64",
              bottom: "-5%",
              left: "40%",
              position: "absolute",
            }}
          />
          <motion.div
            animate={{
              bottom: ["-7.5%", "-5%", "-7.5%"],
              transition: {
                repeat: Infinity,
                duration: 1.4,
              },
            }}
            whileHover={{
              x: "-10%",
              opacity: 0.6,
            }}
            style={{
              height: 80,
              //opacity: 0.6,
              width: "25%",
              background: "#FDF2F4",
              bottom: "-7.5%",
              left: "60%",
              position: "absolute",
            }}
          />
          <motion.div
            animate={{
              bottom: ["-5%", "-7.5%", "-5%"],
              transition: {
                repeat: Infinity,
                duration: 1.4,
              },
            }}
            whileHover={{
              x: "-10%",
              opacity: 0.6,
            }}
            style={{
              height: 80,
              //opacity: 0.6,
              width: "25%",
              background: "#3A3C64",
              bottom: "-5%",
              left: "80%",
              position: "absolute",
            }}
          />
          {/* <motion.div
              style={{
                height: 80,
                //opacity: 0.6,
                width: "20%",
                background: "#FDF2F4",
                bottom: "-5%",
                left: 240,
                position: "absolute",
              }}
            /> */}
        </div>
      </div>
    </div>
  );
}
