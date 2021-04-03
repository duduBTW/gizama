import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commissions from "./pages/commissions";
import Nav from "./pages/components/Nav";
import ContactPage from "./pages/contact";
import Contract from "./pages/contract";
import HomePage from "./pages/home";

// Mine
import Portfolio from "./pages/port/Portfolio";

const getDef = (): null | "en" | "pt" => {
  const item = localStorage.getItem("ln");

  if (item === "en" || item === "pt") {
    return item;
  }

  return null;
};

function App() {
  const [idioma, setIdioma] = useState<null | "en" | "pt" | undefined>(
    getDef()
  );

  useEffect(() => {
    if (!idioma) {
      var language =
        //@ts-ignore
        window.navigator?.userLanguage || window.navigator.language;

      if (language && language.includes("pt")) {
        setIdioma("pt");
      } else {
        setIdioma("en");
      }
    }
  }, []);

  useEffect(() => {
    if (idioma) {
      localStorage.setItem("ln", idioma);
    }
  }, [idioma]);

  return (
    <>
      {!idioma ? (
        <SelectLenguage setIdioma={setIdioma} />
      ) : (
        <BrowserRouter>
          <Nav idioma={idioma} setIdioma={setIdioma} />
          <Switch>
            <Route
              path="/contract"
              exact
              render={() => <Contract idioma={idioma} />}
            />
            <Route
              path="/portfolio"
              exact
              render={() => <Portfolio idioma={idioma} />}
            />
            <Route
              path="/commissions"
              exact
              render={() => <Commissions idioma={idioma} />}
            />
            <Route
              path="/contact"
              exact
              render={() => <ContactPage idioma={idioma} />}
            />
            <Route path="/" exact render={() => <HomePage idioma={idioma} />} />
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

function SelectLenguage({
  setIdioma,
}: {
  setIdioma: React.Dispatch<
    React.SetStateAction<"en" | "pt" | null | undefined>
  >;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "100px",
        background: "#FDF7F9",
      }}
    >
      <motion.img
        onClick={() => setIdioma("pt")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        style={{ cursor: "pointer" }}
        src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
        alt=""
        height="350"
      />
      <motion.img
        onClick={() => setIdioma("en")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        style={{ cursor: "pointer" }}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
        alt=""
        height="350"
      />
    </div>
  );
}

export default App;
