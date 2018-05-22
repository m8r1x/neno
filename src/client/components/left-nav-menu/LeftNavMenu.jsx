import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexContainer, NavItem } from "../";

const LeftNavMenu = ({ className }) => {
  return (
    <FlexContainer alignItems="center" className={className} direction="column">
      <NavItem icon="home" label="Home" to="#/home" />
      <NavItem icon="file-alt" label="Editor" to="#/" />
      <NavItem icon="cog" label="Settings" to="#/settings" />
    </FlexContainer>
  );
};

LeftNavMenu.propTypes = {
  className: PropTypes.string
};

const StyledLeftNavMenu = styled(LeftNavMenu)``;

export default StyledLeftNavMenu;
