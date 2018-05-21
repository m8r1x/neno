import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ children, className, label, type }) => {
  return (
    <button className={className} type={type}>
      {children || label}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

const StyledButton = styled(Button)`
  color: var(--gun-metal);
  background: transparent;
  :hover {
    background-color: var(--platinum);
  }
  border-color: #e9e9e9;
  font-weight: 600;
  letter-spacing: 0.03em;
  font-size: 0.8125rem;
  min-width: 2.375rem;
  display: block;
  text-align: center;
  text-transform: none;
  margin: 2px 0;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 3px;
  font-family: Courier;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out box-shadow 0.15s ease-in-out;
  padding: ${({ px, py }) => `var(--p-${py}) var(--p-${px})`};
  width: ${({ width }) => width};
`;

StyledButton.defaultProps = {
  type: "button",
  px: 3,
  py: 2,
  width: "100%"
};

export default StyledButton;
