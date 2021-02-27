import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Mine
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: 48, width: "75vw", background: "#3A3C64" }}></div>
      <Switch>
        <Route path="/portfolio" exact render={() => <Portfolio />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
