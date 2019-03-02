import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "actions";
import { UserPost } from "../";
import { NotificationContainer } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderContent = () => {
    const {
      posts: { loading, payload }
    } = this.props;
    return (
      <>
        {loading ? <LinearProgress /> : null}
        {payload.map(post => {
          return <UserPost key={post.id} post={post} />;
        })}
      </>
    );
  };

  render() {
    return (
      <div className="ui relaxed divided list">
        <NotificationContainer />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ jsonPlaceHolder }) => {
  return {
    posts: jsonPlaceHolder
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
