import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.togglePostDescription = this.togglePostDescription.bind(this);
    // this.showComments = this.showComments.bind(this);
  }

  togglePostDescription() {
    if (this.props.postBodyText) {
      return (
        <div className="toggle-post-description">
          <div className="post-description-user">
            {this.props.currentUser}
          </div>
          <p>: </p>
          <div className="post-description">
            {this.props.postBodyText}
          </div>
        </div>
      )
    } else {
      return '';
    }
  }

  render() {
    return (
      <>
        <div className="show-right-mid-body">
          {this.togglePostDescription}
          <ul>
            {this.showComments}
          </ul>
        </div>
        <div className="show-right-bottom-body">
          <input type="text"/>
        </div>
      </>
    )
  }
}

export default Comment;