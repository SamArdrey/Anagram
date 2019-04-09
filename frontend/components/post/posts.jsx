import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ''
    };
    this.renderPhotos = this.renderPhotos.bind(this);
  }

  componentDidMount() {
    // this.props.fetchPosts(this.props.currentProfileId);
  }

  renderPhotos() {
    if (Object.keys(this.props.userPosts).length > 0) {
      this.state.posts = Object.keys(this.props.userPosts).reverse().map( id => (
        <button
          key={id}
          onClick={() =>
            this.props.openPostModal('show', this.props.userPosts[id].photoUrl, id)
          }
          className="post-image-link"
        >
          <img className="image-th" src={this.props.userPosts[id].photoUrl} />
        </button>
      ))
    }
  }

  render() {
    this.renderPhotos()

    return (
      <div className="posts-page">
        <div className="post-image-li">
         {this.state.posts}
        </div>
      </div>
    )
  }
}

export default Posts;