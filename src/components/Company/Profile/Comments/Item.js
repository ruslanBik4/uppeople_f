// Core
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
// Components
import ModalToDelete from "../../../shared/ModalToDelete";
import ModalToEditComment from "../../../shared/ModalToEditComment";
// Context
import { ModalConsumer } from "../../../../providers/ModalProvider";

const editButton = (id, name, comments, onEditComment) => <ModalConsumer>
      {({ showModal, hideModal }) => (
        <Button
          title="edit"
          style={{
            position: "absolute",
            right: "2.5rem",
            padding: 0,
            backgroundColor: "transparent",
            borderColor: "transparent"
          }}
          onClick={() =>
            showModal(ModalToEditComment, {
              isOpenModal: true,
              title: "Edit comment",
              name: `${name} comment`,
              comment: {comments},
              onEdit: (comment) => {
                onEditComment(id, comment);
                hideModal();
              }
            })
          }
        >
          <i className="icon-pencil icons font-lg" color="gray" />
        </Button>
      )}
    </ModalConsumer>;

const CompanyProfileCommentsItem = ({
  id,
  name,
  user_id,
  time_create,
  auth_user_id,
  comments,
  onDeleteComment,
  onEditComment
}) => { console.log('User: ' + auth_user_id); return (
  <Row>
    <Col xs={2} sm={1} md={1} lg={1}>
      <div
        style={{
          width: 40,
          height: 40,
          background: "var(--secondary)",
          borderRadius: "50%"
        }}
      />
    </Col>
    <Col xs={10} sm={11} md={11} lg={11}>
      <Link to="#">{name}</Link>
      <p style={{ marginBottom: 0 }}>{comments}</p>
      <p style={{ fontSize: 12, color: "var(--secondary)" }}>{time_create}</p>
    </Col>
    {(user_id === auth_user_id) ? editButton(id, name, comments, onEditComment) : ''}
    <ModalConsumer>
      {({ showModal, hideModal }) => (
        <Button
          title="delete"
          style={{
            position: "absolute",
            right: "1rem",
            padding: 0,
            backgroundColor: "transparent",
            borderColor: "transparent"
          }}
          onClick={() =>
            showModal(ModalToDelete, {
              isOpenModal: true,
              title: "Delete comment",
              name: `${name} comment`,
              onDelete: () => {
                onDeleteComment(id);
                hideModal();
              }
            })
          }
        >
          <i className="icon-trash icons font-lg" color="gray" />
        </Button>
      )}
    </ModalConsumer>
  </Row>
)};

CompanyProfileCommentsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  time_create: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired
};

export default CompanyProfileCommentsItem;
