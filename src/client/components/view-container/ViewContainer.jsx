import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ViewContainer = ({ className, children }) => {
  return <div className={className}>{ children }</div>;
};

ViewContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flex: PropTypes.bool,
  height: PropTypes.string,
  justify: PropTypes.string,
  px: PropTypes.number,
  py: PropTypes.number
};

const StyledViewContainer = styled(ViewContainer)`
  height: ${({ height }) => height};
  margin: 0 auto;
  padding: ${({ px, py }) => `var(--p-${py}) var(--p-${px})`};
  display: ${({ flex, flexCol }) => (flex || flexCol) && "flex"};
  flex-direction: ${({
    flexCol,
    flexDirection
  }) => flexCol && "column" || flexDirection};
  justify-content: ${({ justify }) => justify};
`;

StyledViewContainer.defaultProps = {
  height: "100%",
  px: 0,
  py: 4
};

export default StyledViewContainer;
