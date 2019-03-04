import React from 'react';

class ShowPost extends React.Component {
  render() {
    return (
      <div className="show-post-container">
        <div className='show-left-post-container'>
          <img className='show-image' src={this.props.currentPost} />
        </div>
        <div className="show-right-post-container">
          <div className="show-right-top">
            profile n such
          </div>
          <div className="show-right-mid">
            <div className="show-right-body">
              words
            </div>
          </div>
          <div className="show-right-bottom">
            <div className="empty">
              empty
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ShowPost;