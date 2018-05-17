import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexContainer, FlexItem, RichEditor } from "../../components";

const MainView = ({ className }) => {
  return (
    <div className={className}>
      <FlexContainer justify="center">
        <FlexItem basis="22%">
          <FlexContainer px={2} />
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

MainView.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string
};

const StyledMainView = styled(MainView)`
  height: ${({ height }) => height};
`;


StyledMainView.defaultProps = {
  height: "100%"
};

export default StyledMainView;
