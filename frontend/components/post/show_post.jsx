import React from 'react';

class ShowPost extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNextButton = this.toggleNextButton.bind(this);
    this.togglePreviousButton = this.togglePreviousButton.bind(this);
  }

  componentDidMount() {

  }

  toggleNextButton() {
    let checkAgainst = Object.keys(this.props.posts);
    let nextPostId = Number(this.props.currentPostId) + 1;
    console.log(nextPostId)

    if ((nextPostId) < checkAgainst[checkAgainst.length-1]) {
      return (
        <div className="next-arrow">
          <button onClick={(this.props.closeModal())} onClick={() =>
            this.props.openModal(
              'show',
              this.props.posts[nextPostId],
              nextPostId
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
    if (this.props.currentPostId != 1) {
      return (
        <div className="previous-arrow">
          <img src={window.images.previousPost} className="previous-post-button"/>
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