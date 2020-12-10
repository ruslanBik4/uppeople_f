// Core
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
// Components
import ModalToDelete from "../../shared/ModalToDelete";
import ModalToEditComment from "../../shared/ModalToEditComment";
// Context
import { ModalConsumer } from "../../../providers/ModalProvider";
import { moment } from "react-dates"


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

const CandidateProfileCommentsItem = ({
  id,
  name,
  user_id,
  created_at,
  auth_user_id,
  comments,
  onDeleteComment,
  onEditComment
}) => (
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
      <p style={{ fontSize: 12, color: "var(--secondary)" }}>{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(new Date(created_at))}</p>
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
);

CandidateProfileCommentsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired
};

export default CandidateProfileCommentsItem;
