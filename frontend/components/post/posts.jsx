import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.displayPosts = this.displayPosts.bind(this)
  }

  displayPosts() {
    // if (!!this.props.userPosts) {
    //   return (<div />)
    // }
    let p = this.props.userPosts.map = post => (
      <button onClick={() => this.props.openModal('show', post.photoUrl)} className="post-image-link">
        <img className="image-th" src={post.photoUrl} />
      </button>
    );

    return(
      <div className="post-image-li">
        {p}
      </div>
    )
  }

  render() {
    return (
      <div className="posts-page">
        {this.displayPosts()}
      </div>
    )
  }
}

export default Posts;