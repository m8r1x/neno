import React from "react";
import { render } from "react-dom";

import "./styles/variables.css";
import "./styles/reset.css";

import App from "./App";

require("../utils/warn-open-devtools");

render(<App />, document.getElementById("root"));
