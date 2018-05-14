import React from "react";
import PropTypes from "prop-types";

import * as styles from "./MainView.css";

const MainView = ({ className = "", ...extraProps }) => {
  const classes = `${styles["main-view"]} ${className}`;
  return <div className={classes} {...extraProps} />;
};

MainView.propTypes = {
  className: PropTypes.string
};

export default MainView;
