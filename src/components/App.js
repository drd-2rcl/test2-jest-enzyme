import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { connect } from 'react-redux';

class App extends Component {
  renderButton = () => {
    const { auth } = this.props;
    if (auth) {
      return (
        <button>
          Sign Out
        </button>
      )
    } else {
      return (
        <button>
          Sign In
        </button>
      )
    }
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
      { this.renderHeader() }
        <Route path="/" exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(App);
