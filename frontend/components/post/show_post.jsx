import React from 'react';

class ShowPost extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNextButton = this.toggleNextButton.bind(this)
    this.togglePreviousButton = this.togglePreviousButton.bind(this)
  }

  toggleNextButton() {
    return (
      <div className="next-arrow">
        <img src={window.images.nextPost} className="next-post-button"/>
      </div>
    )
  }

  togglePreviousButton() {
    return (
      <div className="previous-arrow">
        <img src={window.images.previousPost} className="previous-post-button"/>
      </div>
    )
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
                <img className="show-right-top-profile-image" src={window.images.chuck}/>
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
              words <br/>
              more words;
            </div>
          </div>
        </div>
        {this.toggleNextButton()}
      </div>
    )
  }
}


export default ShowPost;