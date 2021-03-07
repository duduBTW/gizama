import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commissions from "./pages/commissions";

// Mine
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, flexGrow: 1 }}>
          <div
            style={{
              height: 48,
              width: "75vw",
              background: "#3A3C64",
            }}
          ></div>
          <Switch>
            <Route path="/portfolio" exact render={() => <Portfolio />} />
            <Route path="/commissions" exact render={() => <Commissions />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
