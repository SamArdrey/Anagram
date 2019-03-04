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
  }

  render() {
    return (
      <div className="posts-page">
          <div className="post-image-li">
            <button onClick={() => this.props.openModal('show', window.images.one)} className="post-image-link">
              <img className="image-th" src={window.images.one} />
            </button>
          </div>
          <div className="post-image-li">
            <button onClick={() => this.props.openModal('show', window.images.two)} className="post-image-link">
              <img className="image-th" src={window.images.two} />
            </button>
          </div>
          <div className="post-image-li">
            <button onClick={() => this.props.openModal('show', window.images.three)} className="post-image-link">
              <img className="image-th" src={window.images.three} />
            </button>
          </div>
          <div className="post-image-li">
            <button onClick={() => this.props.openModal('show', window.images.four)} className="post-image-link">
              <img className="image-th" src={window.images.four} />
            </button>
          </div>
          <div className="post-image-li">
            <button onClick={() => this.props.openModal('show', window.images.five)} className="post-image-link">
              <img className="image-th" src={window.images.five} />
            </button>
          </div>
      </div>
    )
  //   if (this.props.currentUser && this.props.currentUser.posts) {
  //     props = (
  //       this.props.currentUser.posts.map(post =>
  //         <li key={post.id}>
  //           x
  //           {console.log(post)}
  //           {console.log(post.photoUrl)}
  //           <img src={post.photoUrl} />
  //         </li>
  //       )
  //     )}

  //   <div className="posts-container">
  //   <ul className="posts-ul">
  //     { props }
  //   </ul>
  // </div>
  }
}

export default Posts;