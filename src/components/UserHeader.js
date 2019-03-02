import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { userId } = this.props;
    return (
      <div>
        <h1>{userId}</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(UserHeader);
