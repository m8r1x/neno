import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ViewContainer, Column } from "../../components";

const MainView = ({ className }) => {
  return (
    <div className={className}>
      <ViewContainer flex justify="center">
        <Column>
          <ViewContainer px={2} />
        </Column>
        <Column grow={2} backgroundColor="#ffffff">
          <ViewContainer px={2} />
        </Column>
        <Column>
          <ViewContainer px={2} />
        </Column>
      </ViewContainer>
    </div>
  );
};

MainView.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string
};

const StyledMainView = styled(MainView)`
  height: ${({ height }) => height};
`;


StyledMainView.defaultProps = {
  height: "100%"
};

export default StyledMainView;
