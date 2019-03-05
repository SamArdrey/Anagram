import React from 'react';

class ShowPost extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNextButton = this.toggleNextButton.bind(this);
    this.togglePreviousButton = this.togglePreviousButton.bind(this);
  }



  toggleNextButton() {
    let postKeysArray = Object.keys(this.props.posts);
    let nextPostArrayIndex = postKeysArray.indexOf(this.props.currentPostId) + 1;
    let nextPostKey = postKeysArray[nextPostArrayIndex];

    if (nextPostArrayIndex < postKeysArray.length) {
      return (
        <div className="next-arrow">
          <button onClick={(this.props.closeModal())} onClick={() =>
            this.props.openModal(
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
    let postKeysArray = Object.keys(this.props.posts);
    let previousPostArrayIndex = postKeysArray.indexOf(this.props.currentPostId) - 1;
    let previousPostKey = postKeysArray[previousPostArrayIndex];

    if (previousPostArrayIndex >= 0) {
      return (
        <div className="previous-arrow">
          <button onClick={(this.props.closeModal())} onClick={() =>
              this.props.openModal(
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
            <div className="show-right-mid-body">
              {this.props.currentUser}:
              {this.props.currentPhotoComment}
            </div>
          </div>
        </div>

        {this.toggleNextButton()}
      </div>
    )
  }
}

export default ShowPost;