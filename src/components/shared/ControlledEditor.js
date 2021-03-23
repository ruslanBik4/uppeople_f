// Core
import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Col, Button, ButtonGroup, Row } from "reactstrap";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class ControlledEditor extends Component {
  constructor(props) {
    super(props);

    const html = props.content === null || props.content === undefined ? "" : props.content;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleSubmit = () => {
    const { editorState } = this.state;
    const { title, onUpdate, close } = this.props;

    if (title === "Send details") {
      const send_details = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      const contentToUpdate = {
        send_details
      };

      onUpdate(contentToUpdate);
    } else if (title === "About company") {
      const about = draftToHtml(convertToRaw(editorState.getCurrentContent()));
      const contentToUpdate = {
        about
      };

      onUpdate(contentToUpdate);
    } else if (title === "Interview details") {
      const interview_detail = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      const contentToUpdate = {
        interview_detail
      };

      onUpdate(contentToUpdate);
    } else if (title === "About candidate") {
      const about = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      const contentToUpdate = {
        about
      };

      onUpdate(contentToUpdate);
    } else if (title === "Description") {
      const description = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      const contentToUpdate = {
        description
      };

      onUpdate(contentToUpdate);
    } else if (title === "Details") {
      const details = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      const contentToUpdate = {
        details
      };

      onUpdate(contentToUpdate);
    } else {
      const content = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const contentToUpdate = {
        content
      };

      onUpdate(contentToUpdate);
    }

    close();
  };

  render() {
    const { editorState } = this.state;

    return (
      <div onSubmit={this.handleSubmit}>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          // wrapperStyle={<wrapperStyleObject>}
          // editorStyle={<editorStyleObject>}
          // toolbarStyle={<toolbarStyleObject>}
          localization={{
            locale: "ru"
          }}
          onEditorStateChange={this.onEditorStateChange}
        />

        <ButtonGroup>
          <Row>
            <Col xl={12}>
              <Button color="primary" onClick={this.handleSubmit}>
                Save
              </Button>
            </Col>
          </Row>
        </ButtonGroup>
      </div>
    );
  }
}
