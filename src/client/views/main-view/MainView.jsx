import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ViewContainer, Column, RichEditor } from "../../components";

const MainView = ({ className }) => {
  return (
    <div className={className}>
      <ViewContainer flex justify="center">
        <Column>
          <ViewContainer px={2} />
        </Column>
        <Column backgroundColor="#ffffff" maxWidth="56%">
          <ViewContainer px={2}>
            <RichEditor />
          </ViewContainer>
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
