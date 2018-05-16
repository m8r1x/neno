import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Column = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  grow: PropTypes.number,
  maxWidth: PropTypes.string,
};

const StyledColumn = styled.div`
  flex-grow: ${({ grow }) => grow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
`;


StyledColumn.defaultProps = {
  grow: 1
};

export default StyledColumn;
