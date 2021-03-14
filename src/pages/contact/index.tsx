import React from "react";
import { ContactItem } from "../home";
import { ButtonContact, ContactContainer } from "./style";

export default function ContactPage() {
  return (
    <ContactContainer>
      <div className="contact">
        <header>
          <h1>CONTACT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </header>
        <div className="spacer"></div>
        <div className="rig">
          <form action="">
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
              <textarea name="message" id="message" rows="6"></textarea>
            </div>

            <ButtonContact type="submit">Send Message</ButtonContact>
          </form>
        </div>
      </div>
      <div className="spcaer-lg"></div>
      <div>
        <h2>You can also enter in contact on</h2>
        <br />
        <br />
        <div className="contact-soc">
          {" "}
          <ContactItem />
          <ContactItem />
        </div>
      </div>
      <div className="spcaer-lg"></div>
    </ContactContainer>
  );
}
