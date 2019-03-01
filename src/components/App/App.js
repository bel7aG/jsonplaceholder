import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "actions";
import { UserPost } from "../";
import { NotificationContainer } from "react-notifications";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchPosts();
  }

  renderContent = () => {
    const {
      jsonPlaceHolder: { loading, payload }
    } = this.props;
    if (loading) {
      return <h1 style={{ color: "red" }}>Loadingggggg</h1>;
    } else {
      return payload.map(post => <UserPost key={post.id} post={post} />);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="ui relaxed divided list">
        <NotificationContainer />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ jsonPlaceHolder }) => ({
  jsonPlaceHolder
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
