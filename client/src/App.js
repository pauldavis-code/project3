import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import homepage from "./pages/homepage"; 
import cards from "./pages/cards";

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <h1>this is a header</h1>
        </div>
        <div className="content">
          <Switch>
            <Route exact-path="/" component={homepage}></Route>
            <Route exact-path="/cards" component={cards}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
