import React from "react";
import { shallow } from "enzyme";

import { Column } from "../src/client/components";

test("Column renders without error", () => {
  const column = shallow(<Column />);
  expect(column.length).toBe(1);
});
