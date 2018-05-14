import React from "react";
import { shallow } from "enzyme";

import App from "../src/client/App";

test("App renders without error", () => {
  const app = shallow(<App />);
  expect(app.hasClass("app")).toBe(true);
});
