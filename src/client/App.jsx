import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { remote } from "electron";

import { EditorView, HomeView, SettingsView } from "./views";

const logger = remote.getGlobal("logger");

/* no need to export -> import: only required here */
const RouteWithLogger = ({ exact, path, component }) => {
  logger.info(`navigated to ${path}`);
  return <Route exact={exact} path={path} component={component} />;
};

RouteWithLogger.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func
};
/* ****** */

const App = () => (
  <Router>
    <Switch>
      <RouteWithLogger exact path="/" component={EditorView} />
      <RouteWithLogger exact path="/home" component={HomeView} />
      <RouteWithLogger exact path="/settings" component={SettingsView} />
    </Switch>
  </Router>
);

export default App;
