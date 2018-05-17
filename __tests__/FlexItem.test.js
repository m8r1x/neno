import React from "react";
import { shallow } from "enzyme";

import { FlexItem } from "../src/client/components";

test("FlexItem renders without error", () => {
  const flexItem = shallow(<FlexItem />);
  expect(flexItem.length).toBe(1);
});
