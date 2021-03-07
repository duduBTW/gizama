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
      <header>
        <div className="exemple">
          <img src="https://i.imgur.com/C2p79XQ.jpg" alt="" />
        </div>
        <div className="desc">
          <div>
            <h1>COMMISIONS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniamadipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolor
            </p>
          </div>
        </div>
      </header>
      <div className="spacer-lg"></div>
      <div className="info">
        <h2 className="price">100</h2>
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
