import { motion, Variants } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./styles";

const links: { url: string; label: string }[] = [
  {
    url: "/contract",
    label: "terms",
  },
  {
    url: "/portfolio",
    label: "portfolio",
  },
  {
    url: "/commissions",
    label: "commissions",
  },
  {
    url: "/contact",
    label: "contact",
  },
];

const variants: Variants = {
  hover: {
    x: 0,
    y: 0,
  },
};

const slashMotion: Variants = {
  rest: {
    x: "-100%",
    transition: {
      mass: 0.1,
      bounce: 0,
    },
  },
  hover: {
    x: 0,
    transition: {
      mass: 0.1,
    },
  },
};

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
      <div className="item">
        {links.map((link) => (
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={variants}
            style={{ height: "100%", position: "relative" }}
          >
            <Link to={link.url} key={link.url} className="link">
              <motion.div>{link.label}</motion.div>
              <motion.div variants={slashMotion} className="hoverEffect" />
            </Link>
          </motion.div>
        ))}
      </div>
    </NavContainer>
  );
}
