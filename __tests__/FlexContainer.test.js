import React from "react";
import { shallow } from "enzyme";

import { FlexContainer } from "../src/client/components";

test("FlexContainer renders without error", () => {
  const flexContainer = shallow(<FlexContainer />);
  expect(flexContainer.length).toBe(1);
});
