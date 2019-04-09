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


    let posts = Object.keys(this.props.posts).map(id => {
      return (
        <div className="post-container" key={id}>
          <div className="post-image" key={id}>
            <img className="post-image-image" key={id} src={this.props.posts[id].photoUrl}/>
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