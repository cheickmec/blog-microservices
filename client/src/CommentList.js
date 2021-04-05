import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case "approved":
        content = comment.content;
        break;
      case "pending":
        content = (
          <p className="text-warning">This comment is awaiting moderation</p>
        );
        break;
      case "rejected":
        content = <p className="text-danger">This comment has been rejected</p>;
        break;
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};
