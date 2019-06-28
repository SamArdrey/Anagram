import React from 'react';
import CommentContainer from '../comment/comment_container';
import LikeContainer from '../like/like_container';
import CommentFormContainer from '../comment/comment_form_container';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNextButton = this.toggleNextButton.bind(this);
    this.togglePreviousButton = this.togglePreviousButton.bind(this);
    this.changeHTMLClass = this.changeHTMLClass.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.currentPostId);
  }

  toggleNextButton() {
    if (this.props.pageType === 'page') return;
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
    if (this.props.pageType === 'page') return;
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

  changeHTMLClass(nameBeginning) {
    if (this.props.pageType === "modal") return nameBeginning
    return (nameBeginning + "-page")
  }

  refreshPage() {
    if (this.props.pageType === 'modal') window.location.reload();
  }

  render() {
    if (!this.props.current) return null;

    let author = this.props.users[this.props.current.authorId]
    return (
      <div className={this.changeHTMLClass("show-post-container")}>
        {this.togglePreviousButton()}

        <div className={this.changeHTMLClass('show-left-post-container')}>
          <img className={this.changeHTMLClass('show-image')} src={this.props.current.photoUrl} />
        </div>

        <div className={this.changeHTMLClass("show-right-post-container")}>
          <div className={this.changeHTMLClass("show-right-top")}>
            <div className={this.changeHTMLClass("show-right-top-profile-image-container")}>
              <a href={`/#/${author.id}`} onClick={() => this.refreshPage()}>
                <img className={this.changeHTMLClass("show-right-top-profile-image")} src={author.photoUrl}/>
              </a>
            </div>

            <div className={this.changeHTMLClass("show-right-top-username")}>
              <a href={`/#/${author.id}`} onClick={() => this.refreshPage()}>
                {author.username}
              </a>
            </div>
          </div>

          <div className={this.changeHTMLClass("show-right-mid")}>
            <CommentContainer
              post={this.props.current}
            />
            <LikeContainer
              post={this.props.current}
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