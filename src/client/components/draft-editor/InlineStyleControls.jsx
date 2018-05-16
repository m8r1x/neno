import React from "react";
import PropTypes from "prop-types";

import { MapArray } from "../mapper";
import StyleButton from "./StyleButton";

import * as styles from "./RichEditor.css";

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" }
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  const mapActiveState = childProps => ({
    ...childProps,
    active: currentStyle.has(childProps.style)
  });
  return (
    <div className={styles["RichEditor-controls"]}>
      <MapArray from={INLINE_STYLES} map={mapActiveState}>
        <StyleButton onToggle={onToggle} />
      </MapArray>
    </div>
  );
};

InlineStyleControls.propTypes = {
  editorState: PropTypes.object,
  onToggle: PropTypes.func
};

export default InlineStyleControls;
