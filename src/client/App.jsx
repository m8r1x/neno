import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { EditorView } from "./views";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={EditorView} />
    </Switch>
  </Router>
);

export default App;
