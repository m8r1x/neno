import React from "react";
import PropTypes from "prop-types";

import { Button, Icon } from "../";

const NavItem = ({ icon, label, to }) => {
  return (
    <Button
      as="a"
      width="86%"
      background="transparent"
      fontFamily="Courier"
      href={to}
      hoverBackgroundColor="platinum"
      focusBackgroundColor="ash-grey"
      focusOutlineColor="ash-grey"
      textAlign="left"
    >
      <Icon className={`fa fa-${icon}`} />
      <span>{label}</span>
    </Button>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string
};

export default NavItem;
