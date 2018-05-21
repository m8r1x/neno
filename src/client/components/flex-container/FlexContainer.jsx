import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexContainer = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

FlexContainer.propTypes = {
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "stretch"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    "column",
    "column-reverse",
    "row",
    "row-reverse"
  ]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  mw0: PropTypes.bool,
  px: PropTypes.number,
  py: PropTypes.number,
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"])
};

const StyledFlexContainer = styled(FlexContainer)`
  /* Flex styles */
  display: flex;
  ${({ direction }) => (direction ? `flex-direction: ${direction}` : "")};
  ${({ alignContent }) =>
    alignContent ? `align-content: ${alignContent}` : ""};
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : "")};
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ""};
  ${({ wrap }) => (wrap ? `flex-wrap: ${wrap}` : "")};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor}` : ""};

  /* Sizing */
  ${({ mw0 }) => (mw0 ? "min-width: 0" : "")};
  padding: ${({ px, py }) => `var(--p-${py}) var(--p-${px})`};
`;

StyledFlexContainer.defaultProps = {
  px: 0,
  py: 4
};

export default StyledFlexContainer;
