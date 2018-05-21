import React from "react";
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils
} from "draft-js";
import "draft-js/dist/Draft.css";
import { remote } from "electron";

import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";

import { FlexContainer } from "../flex-container";

const logger = remote.getGlobal("logger");

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.editorRef = React.createRef();
    this.focus = () => this.editorRef.current.focus();
    this.localStorageKey = btoa("latest-editor-state");
    this.onChange = editorState => this.setState({ editorState });

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  componentDidMount() {
    const rawDraftContentState = localStorage.getItem(this.localStorageKey);
    if (rawDraftContentState) {
      const contentState = convertFromRaw(JSON.parse(rawDraftContentState));
      this.setState({
        editorState: EditorState.createWithContent(contentState)
      });
      logger.info("load from localStorage successful [latest-editor-state]");
    }
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    if (command === "editor-save") {
      const rawDraftContentState = JSON.stringify(
        convertToRaw(this.state.editorState.getCurrentContent())
      );
      localStorage.removeItem(this.localStorageKey);
      logger.info("clearing cache...");
      localStorage.setItem(this.localStorageKey, rawDraftContentState);
      logger.info("save to cache successful");
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    if (e.keyCode === 83 && KeyBindingUtil.hasCommandModifier(e)) {
      return "editor-save";
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  render() {
    const { editorState } = this.state;
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== "unstyled"
      ) {
        className += " RichEditor-hidePlaceholder";
      }
    }
    return (
      <FlexContainer direction="column" px={20}>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref={this.editorRef}
            spellCheck={true}
          />
        </div>
      </FlexContainer>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: "\"Inconsolata\", \"Menlo\", \"Consolas\", monospace",
    fontSize: 16,
    padding: 2
  }
};
function getBlockStyle(block) {
  switch (block.getType()) {
  case "blockquote":
    return "RichEditor-blockquote";
  default:
    return null;
  }
}

export default RichEditor;
