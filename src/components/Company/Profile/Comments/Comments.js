// Core
import React from "react";
import PropTypes from "prop-types";
// Components
import CompanyProfileCommentsList from "./List";
import CompanyProfileCommentsForm from "./Form";
// import { AccountConsumer } from "../../../../providers/AccountProvider";

const CompanyProfileComments = ({
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
    <CompanyProfileCommentsList
      comments={comments}
      auth_user_id={auth_user_id}
      onDeleteComment={onDeleteComment}
      onEditComment={onEditComment}
    />
    <CompanyProfileCommentsForm onAddComment={onAddComment} />
  </>
  //     )
  //   }
  // </AccountConsumer>
);

CompanyProfileComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      time_create: PropTypes.string,
      comments: PropTypes.string
    })
  ),
  auth_user_id: PropTypes.number.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired
};

CompanyProfileComments.defaultProps = {
  comments: []
};

export default CompanyProfileComments;
