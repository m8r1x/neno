import React from "react";
import { shallow } from "enzyme";

import { EditorView } from "../src/client/views";

test("EditorView renders without error", () => {
  const editorView = shallow(<EditorView />);
  expect(editorView.length).toBe(1);
});
