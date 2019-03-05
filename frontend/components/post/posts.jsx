import React from 'react';
import {openOpenModal} from '../../actions/modal_actions'

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUserId);
  }

  render() {
    let p = "";
    if (Object.keys(this.props.userPosts).length > 0) {
      p = Object.keys(this.props.userPosts).map( id => (
        <button key={id} onClick={() => this.props.openModal('show', this.props.userPosts[id].photoUrl, id)} className="post-image-link">
          <img className="image-th" src={this.props.userPosts[id].photoUrl} />
        </button>
      ));
    }

    return (
      <div className="posts-page">
        <div className="post-image-li">
         { p }
        </div>
      </div>
    )
  }
}

export default Posts;