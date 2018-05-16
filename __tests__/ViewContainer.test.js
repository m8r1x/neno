import React from "react";
import { shallow } from "enzyme";

import { ViewContainer } from "../src/client/components";

test("ViewContainer renders without error", () => {
  const viewContainer = shallow(<ViewContainer />);
  expect(viewContainer.length).toBe(1);
});
