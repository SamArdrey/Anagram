import React from 'react';
import CommentContainer from '../comment/comment_container';
import LikeContainer from '../like/like_container';
import CommentFormContainer from '../comment/comment_form_container';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNextButton = this.toggleNextButton.bind(this);
    this.togglePreviousButton = this.togglePreviousButton.bind(this);
  }

  toggleNextButton() {
    let postKeysArray = Object.keys(this.props.posts).reverse();
    let nextPostArrayIndex = postKeysArray.indexOf(this.props.currentPostId) + 1;
    let nextPostKey = postKeysArray[nextPostArrayIndex];

    if (nextPostArrayIndex < postKeysArray.length) {
      return (
        <div className="next-arrow">
          <button onClick={(this.props.closeModal())} onClick={() =>
            this.props.openPostModal(
              'show',
              this.props.posts[String(nextPostKey)].photoUrl,
              String(nextPostKey)
              )}>
            <img src={window.images.nextPost} className="next-post-button"/>
          </button>
        </div>
      )
    } else {
      return (
        <div className="empty-div"></div>
      )
    }
  }

  togglePreviousButton() {
    let postKeysArray = Object.keys(this.props.posts).reverse();
    let previousPostArrayIndex = postKeysArray.indexOf(this.props.currentPostId) - 1;
    let previousPostKey = postKeysArray[previousPostArrayIndex];

    if (previousPostArrayIndex >= 0) {
      return (
        <div className="previous-arrow">
          <button onClick={(this.props.closeModal())} onClick={() =>
              this.props.openPostModal(
                'show',
                this.props.posts[String(previousPostKey)].photoUrl,
                String(previousPostKey)
                )}>
            <img src={window.images.previousPost} className="previous-post-button"/>
          </button>
        </div>
      )
    } else {
      return (
        <div className="empty-div"></div>
      )
    }
  }

  render() {
    return (
      <div className="show-post-container">
        {this.togglePreviousButton()}

        <div className='show-left-post-container'>
          <img className='show-image' src={this.props.currentPost} />
        </div>

        <div className="show-right-post-container">
          <div className="show-right-top">
            <div className="show-right-top-profile-image-container">
              <a href="/">
                <img className="show-right-top-profile-image" src={this.props.currentUserPhoto}/>
              </a>
            </div>

            <div className="show-right-top-username">
              <a href="/">
                {this.props.currentUser}
              </a>
            </div>
          </div>

          <div className="show-right-mid">
            <CommentContainer
              post={this.props.posts[this.props.currentPostId]}
            />
            <LikeContainer
              post={this.props.posts[this.props.currentPostId]}
            />
            <CommentFormContainer
              postId={this.props.currentPostId}
            />
          </div>
        </div>

        {this.toggleNextButton()}
      </div>
    )
  }
}

export default ShowPost;