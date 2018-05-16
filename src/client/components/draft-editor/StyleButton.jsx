import React, { Component } from "react";
import PropTypes from "prop-types";

import * as styles from "./RichEditor.css";

class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = `${styles["RichEditor-styleButton"]}`;
    if (this.props.active) {
      className += ` ${styles["RichEditor-activeButton"]}`;
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

StyleButton.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onToggle: PropTypes.func,
  style: PropTypes.string
};

export default StyleButton;
