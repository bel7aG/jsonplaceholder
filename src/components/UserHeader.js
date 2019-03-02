import React, { Component, memo } from "react";
import { connect } from "react-redux";
import { fetchUser } from "actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { userId, getUser } = this.props;
    console.log(this.props.userId);
    return (
      <div>
        <h1>{userId}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { payload: users } }, ownProps) => {
  return {
    getUser: users.find(({ id }) => id === ownProps.userId)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
