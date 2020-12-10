// Core
import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";
// Components
import CandidateProfileCommentsItem from "./Item";

const CandidateProfileCommentsList = ({ auth_user_id, comments, onDeleteComment, onEditComment }) => {
  const commentsJSX =
    comments !== undefined &&
    comments.map(comment => (
      <ListGroupItem key={comment.id}>
        <CandidateProfileCommentsItem
          {...comment}
          auth_user_id={auth_user_id}
          onDeleteComment={onDeleteComment}
          onEditComment={onEditComment}
        />
      </ListGroupItem>
    ));

  const renderContent =
    comments.length > 0 ? (
      <ListGroup style={{ marginBottom: "1rem" }}>{commentsJSX}</ListGroup>
    ) : (
      <p style={{ color: "var(--secondary)", textAlign: "center" }}>
        There are no comments yet{" "}
        <span role="img" aria-label="crazy face">
          😜
        </span>{" "}
        Please, add a new one.
      </p>
    );

  return <>{renderContent}</>;
};

CandidateProfileCommentsList.propTypes = {

};

CandidateProfileCommentsList.defaultProps = {
  logs: []
};

export default CandidateProfileCommentsList;
