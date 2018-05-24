import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexItem = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

FlexItem.propTypes = {
  alignSelf: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  basis: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  grow: PropTypes.number,
  height: PropTypes.string,
  mw0: PropTypes.bool,
  order: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  shrink: PropTypes.number
};

const StyledFlexItem = styled(FlexItem)`
  /* Flex Styles */
  ${({ order }) => (order ? `order: ${order}` : "")};
  ${({ basis, grow, shrink }) =>
    basis || grow || shrink ? `flex: ${grow} ${shrink} ${basis}` : ""};
  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf}` : "")};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor}` : ""};

  /* Sizing */
  ${({ mw0 }) => (mw0 ? "min-width: 0" : "")};
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}` : "")};
  padding: ${({ px, py }) => `var(--p-${py}) var(--p-${px})`};
`;

StyledFlexItem.defaultProps = {
  basis: "auto",
  grow: 0,
  px: 0,
  py: 0,
  shrink: 1
};

export default StyledFlexItem;
