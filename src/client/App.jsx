import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { MainView } from "./views";

const App = ({ className }) => {
  return (
    <div className={className}>
      <MainView />
    </div>
  );
};

App.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
};

const StyledApp = styled(App)`
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => `var(--${backgroundColor})`};
`;

StyledApp.defaultProps = {
  height: "100%",
  backgroundColor: "anti-flash-white"
};

export default StyledApp;
