import React from "react";
import { shallow } from "enzyme";

import { MainView } from "../src/client/views";

test("MainView renders without error", () => {
  const mainView = shallow(<MainView />);
  expect(mainView.length).toBe(1);
});
