import React, { Component } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";

export default class ModalToEditComment extends Component {
  state = {
    modal: this.props.isOpenModal,
    text: ""
  };

  componentDidMount() {
    const { comment } = this.props;
    this.setState({
      text: comment.comments
    });
  }

  toggle = () => {
    this.setState(state => ({
      modal: !state.modal
    }));

    this.props.onRequestClose();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleEdit = event => {
    event.preventDefault();

    this.props.onEdit(this.state.text);

    this.resetCommentState();
  };

  resetCommentState = () => {
    this.setState({
      text: ""
    });
  };

  render() {
    const { modal, text } = this.state;
    const { title, className } = this.props;

    return (
      <Modal
        isOpen={modal}
        toggle={this.toggle}
        className={`modal-primary " + ${className ? className : ""}`}
      >
        <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            name="text"
            value={text}
            placeholder="Type a comment"
            onChange={this.handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleEdit}>
            Save
          </Button>
          <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
