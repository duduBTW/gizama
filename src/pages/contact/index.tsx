import { motion } from "framer-motion";
import React from "react";
import { ContactItem } from "../home";
import { ButtonContact, ContactContainer } from "./style";

export default function ContactPage() {
  return (
    <ContactContainer>
      <div className="contact">
        <header>
          <motion.h1
            initial={{
              x: -200,
            }}
            animate={{
              x: 0,
            }}
          >
            Contact
          </motion.h1>
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
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </motion.p>
        </header>
        <div className="spacer"></div>
        <div className="rig">
          <motion.form
            initial={{
              y: 20,
              opacity: 0,
              rotate: "15deg",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: "0deg",
            }}
            transition={{
              delay: 0.35,
            }}
            action=""
          >
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="name" />
            </div>

            <div className="soc">
              <div className="input">
                <label htmlFor="twitter">Twitter</label>
                <input name="twitter" />
              </div>
              <div className="input">
                <label htmlFor="discord">Discord</label>
                <input name="discord" />
              </div>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="email">Message</label>
              {/* 
              //@ts-ignore */}
              <textarea
                name="message"
                id="message"
                //@ts-ignore
                rows="6"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <ButtonContact
              animate={{
                background: "#3a3c64",
              }}
              whileHover={{
                background: "#23243b",
              }}
              whileTap={{ scale: 0.9 }}
              type="submit"
            >
              Send Message
            </ButtonContact>
          </motion.form>
        </div>
      </div>
      <div className="spcaer-lg"></div>
      <div className="contact-soc-container">
        <h2>You can also enter in contact on</h2>
        <br />
        <br />
        <div className="contact-soc">
          {" "}
          <div className="left">
            <ContactItem type="DISCORD" title="teste" />
          </div>
          <div className="spacer"></div>
          <div className="spc">
            <ContactItem type="TWITTER" title="teste" />
          </div>
        </div>
      </div>
      <div className="spcaer-lg"></div>
    </ContactContainer>
  );
}
