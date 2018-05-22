import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ as: As, children, className, href, label }) => {
  return (
    <As className={className} href={href}>
      {children || label}
    </As>
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOf(["button", "a"]),
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  focusOutlineColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

const StyledButton = styled(Button)`
  color: var(--gun-metal);
  ${({ background }) => (background ? `background: ${background}` : "")};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor}` : ""};
  :hover {
    background-color: ${({ hoverBackgroundColor }) =>
    `var(--${hoverBackgroundColor})`};
  }
  :focus {
    background-color: ${({ focusBackgroundColor }) =>
    `var(--${focusBackgroundColor})`};
    outline-color: ${({ focusOutlineColor }) => `var(--${focusOutlineColor})`};
  }
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.03em;
  font-size: 0.8125rem;
  min-width: 2.375rem;
  display: block;
  text-align: ${({ textAlign }) => textAlign};
  text-transform: none;
  text-decoration: none;
  margin: 2px 0;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 3px;
  font-family: ${({ fontFamily }) => fontFamily};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out box-shadow 0.15s ease-in-out;
  padding: ${({ px, py }) => `var(--p-${py}) var(--p-${px})`};
  width: ${({ width }) => width};
`;

StyledButton.defaultProps = {
  as: "button",
  type: "button",
  px: 3,
  py: 2,
  width: "100%",
  textAlign: "center",
  fontFamily: "sans-serif"
};

export default StyledButton;
