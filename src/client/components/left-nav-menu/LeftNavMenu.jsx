import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexContainer, Button } from "../";

const LeftNavMenu = ({ className }) => {
  return (
    <FlexContainer
      alignItems="center"
      className={className}
      direction="column"
    >
      <Button label="Editor" width="86%"/>
      <Button label="General" width="86%"/>
      <Button label="Settings" width="86%"/>
    </FlexContainer>
  );
};

LeftNavMenu.propTypes = {
  className: PropTypes.string
};

const StyledLeftNavMenu = styled(LeftNavMenu)``;

export default StyledLeftNavMenu;
