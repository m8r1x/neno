import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { remote } from "electron";

import {
  FlexContainer,
  FlexItem,
  RichEditor,
  LeftNavMenu
} from "../../components";

const logger = remote.getGlobal("logger");

const EditorView = ({ className, match }) => {
  logger.info(`navigated to "${match.path}"`);
  return (
    <div className={className}>
      <FlexContainer justify="center">
        <FlexItem basis="22%">
          <LeftNavMenu />
        </FlexItem>
        <FlexItem basis="56%" backgroundColor="#ffffff" minHeight="640px" mw0>
          <RichEditor />
        </FlexItem>
        <FlexItem basis="22%">
          <FlexContainer px={2} />
        </FlexItem>
      </FlexContainer>
    </div>
  );
};

EditorView.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  match: PropTypes.object
};

const StyledMainView = styled(EditorView)`
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => `var(--${backgroundColor})`};
`;

StyledMainView.defaultProps = {
  backgroundColor: "anti-flash-white",
  height: "100%"
};

export default StyledMainView;
