import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import CommentContainer from '../comment/comment_container';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllComments();
    this.props.fetchAllPosts();
  }

  render() {
    if (!this.props.loggedIn) {
      return <SessionFormContainer />
    }

    if (!this.props.comments) {
      return null;
    } else if (!this.props.posts) {
      return null;
    }

    let posts = Object.keys(this.props.posts).reverse().map(id => {
      let profileLink = "/#/" + this.props.posts[id].authorId;

      return (
        <div className="post-container" key={id}>
          <div className="post-top">
            <a className="explore-profile-pic-link" href={profileLink}>
              <div className="explore-profile-pic-container">
                <img className="explore-profile-pic" src={this.props.posts[id].profilePic}/>
              </div>
            </a>
            <a className="explore-profile-name-link" href={profileLink}>
              {this.props.posts[id].username}
            </a>
          </div>
          <div className="post-mid" key={id}>
            <img className="post-mid-image" key={id} src={this.props.posts[id].photoUrl}/>
          </div>
          <div className="post-bottom">
            <div></div>
            <CommentContainer
              formType='Explore Form'
              postId={id}
              post={this.props.posts[id]}
            />
          </div>
        </div>
      )
    });

    return (
      <div className="explore-page">
        { posts }
      </div>
    )
  }
}

export default Explore;