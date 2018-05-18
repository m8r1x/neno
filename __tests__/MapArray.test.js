import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";

import { MapArray } from "../src/client/components";

const Num = ({ n }) => <div>{n}</div>;
Num.propTypes = { n: PropTypes.number };

test("MapArray renders without error", () => {
  const numbers = [{ n: 1 }, { n: 2 }, { n: 3 }];
  const mappedNumbers = mount(
    <MapArray from={numbers}>
      <Num />
    </MapArray>
  );
  expect(mappedNumbers.children()).toHaveLength(3);
});
