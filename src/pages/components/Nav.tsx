import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./styles";

export default function Nav() {
  return (
    <NavContainer>
      <Link
        className="title"
        to="/"
        style={{ color: "white", textDecoration: "none" }}
      >
        gizama
      </Link>
      <div
        className="item"
        style={{ display: "flex", gap: 40, marginRight: 40 }}
      >
        <Link
          to="/portfolio"
          style={{ color: "white", textDecoration: "none" }}
        >
          portfolio
        </Link>
        <Link
          to="/commissions"
          style={{ color: "white", textDecoration: "none" }}
        >
          commissions
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          contact
        </Link>
      </div>
    </NavContainer>
  );
}
