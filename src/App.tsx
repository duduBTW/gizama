import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commissions from "./pages/commissions";
import Nav from "./pages/components/Nav";
import ContactPage from "./pages/contact";
import Contract from "./pages/contract";
import HomePage from "./pages/home";

// Mine
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/contract" exact render={() => <Contract />} />
        <Route path="/portfolio" exact render={() => <Portfolio />} />
        <Route path="/commissions" exact render={() => <Commissions />} />
        <Route path="/contact" exact render={() => <ContactPage />} />
        <Route path="/" exact render={() => <HomePage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
