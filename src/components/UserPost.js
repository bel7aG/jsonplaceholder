import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "actions";

class UserPost extends Component {
  handleDeletePost = () => {
    const { dispatch } = this.props;
    dispatch(deletePost(this.props.post.id));
  };

  render() {
    const {
      post: { id, title, body }
    } = this.props;
    return (
      <div
        className="item"
        key={this.props.post.id}
        onClick={this.handleDeletePost}
      >
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="discription">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(UserPost);
