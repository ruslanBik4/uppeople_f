// Core
import React from "react";
import PropTypes from "prop-types";
// Components
import CandidateProfileCommentsList from "./CommentsList";
import CandidateProfileCommentsForm from "./CommentsForm";
// import { AccountConsumer } from "../../../../providers/AccountProvider";

const CandidateProfileComments = ({
  auth_user_id,
  comments,
  onAddComment,
  onDeleteComment,
  onEditComment
}) => (
  // <AccountConsumer>
  //   {context =>
  //     console.log(context) || (
  <>
    <CandidateProfileCommentsList
      auth_user_id={auth_user_id}
      comments={comments}
      onDeleteComment={onDeleteComment}
      onEditComment={onEditComment}
    />
    <CandidateProfileCommentsForm onAddComment={onAddComment} />
  </>
  //     )
  //   }
  // </AccountConsumer>
);

CandidateProfileComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      created_at: PropTypes.string,
      comments: PropTypes.string
    })
  ),
  auth_user_id: PropTypes.number.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired
};

CandidateProfileComments.defaultProps = {
  comments: []
};

export default CandidateProfileComments;
