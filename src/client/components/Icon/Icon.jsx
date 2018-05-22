import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Icon = ({ className }) => {
  return <i className={className} />;
};

Icon.propTypes = {
  className: PropTypes.string
};

const StyledIcon = styled(Icon)`
  margin: 4px 8px;
  width: 13px;
`;

export default StyledIcon;
