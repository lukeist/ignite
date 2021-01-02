import React, { useEffect } from "react";
// Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
// import GameDetails from "./pages/GameDetails";
import { Link, Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Switch> */}
      {/* <Route path="/" exact> */}
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
      {/* </Route> */}
      {/* <Route path="/:id">
          <GameDetails />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
