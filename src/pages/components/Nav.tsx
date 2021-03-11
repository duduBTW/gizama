import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div
      style={{
        height: 48,
        width: "75vw",
        background: "#3A3C64",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <h2 style={{ marginLeft: 40 }}>gizama</h2>
      <div style={{ display: "flex", gap: 40, marginRight: 40 }}>
        <Link
          to="/portfolio"
          style={{ color: "white", textDecoration: "none" }}
        >
          portfolio
        </Link>
        <div>commissions</div>
        <div>contact</div>
      </div>
    </div>
  );
}
