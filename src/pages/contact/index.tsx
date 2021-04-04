import React from "react";
import { motion } from "framer-motion";
import { ContactItem } from "../home";
import { ButtonContact, ContactContainer } from "./style";
import { useForm } from "@formcarry/react";
import content from "../../data";
import discordIcon from "../../assets/discordIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";

export default function ContactPage({ idioma }: { idioma: "en" | "pt" }) {
  const { title, dec } = content[idioma].cotact;
  const { twitter, discord, discordUrl, twitterUrl } = content[idioma];
  const { state, submit } = useForm({
    id: "azwU9knvWP",
  });

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
            {title}
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
            {dec}
          </motion.p>
        </header>
        <div className="spacer"></div>
        <div className="rig">
          {state.submitted && (
            <div
              style={{
                border: "1px solid green",
                color: "green",
                borderRadius: 10,
                padding: 20,
                marginBottom: "30px",
              }}
            >
              <h3 style={{ padding: 0, margin: 0 }}>
                {idioma === "pt"
                  ? "Mensagem enviada com sucesso!"
                  : "message sent successfully!"}
              </h3>
            </div>
          )}

          <motion.form
            onSubmit={submit}
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
              <input type="name" name="Nome" />
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
                <input type="email" name="email" />
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
            {state.submitting ? (
              <h3 style={{ width: "110%" }}>
                {" "}
                {idioma === "en" ? "Sending message" : "Enviando mensagem"}...
              </h3>
            ) : (
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
                {idioma === "en" ? "Send Message" : "Enviar Mensagem"}
              </ButtonContact>
            )}
          </motion.form>
        </div>
      </div>
      <div className="spcaer-lg"></div>
      <div className="contact-soc-container">
        <h2>
          {idioma === "en"
            ? "You can also enter in contact on"
            : "Você também pode entrar em contato pelo"}
        </h2>
        <br />
        <br />
        <div className="contact-soc">
          {" "}
          <div className="left">
            <ContactItem
              icon={discordIcon}
              type="DISCORD"
              title={discord}
              url={discordUrl}
            />
          </div>
          <div className="spacer"></div>
          <div className="spc">
            <ContactItem
              url={twitterUrl}
              icon={twitterIcon}
              type="TWITTER"
              title={twitter}
            />
          </div>
        </div>
      </div>
      <div className="spcaer-lg"></div>
    </ContactContainer>
  );
}
