import React, { useState, useEffect } from 'react';
import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../styles/RichTextEditor.css'

function RichTextEditor({ content, onChange }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(content))
  );

  useEffect(() => {
    if (content) {
      try {
        const contentState = convertFromRaw(JSON.parse(content));
        setEditorState(EditorState.createWithContent(contentState));
      } catch (e) {
        setEditorState(EditorState.createWithContent(ContentState.createFromText(content)));
      }
    }
  }, [content]);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentState = state.getCurrentContent();
    onChange(JSON.stringify(convertToRaw(contentState)));
  };

  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div className="rich-text-editor">
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default RichTextEditor;
