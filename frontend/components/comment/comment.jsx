import React from 'react';
import { runInThisContext } from 'vm';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.showComments = this.showComments.bind(this);
    this.generateCommentList = this.showComments.bind(this);
    this.organizeCommentList = this.organizeCommentList.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.currentPostId);
  }

  showComments(comment, userId, newClass) {
    let newClassName = (newClass == "parent" ? "parent-comment" : "child-comment");

    if (comment) {
      return (
        <li className={newClassName}>
          <div className="comment-user">
            {this.props.comments[comment]}:
          </div>
          <div className="comment">
            {comment}
          </div>
        </li>
      )
    } else {
      return (
        <div></div>
      );
    }
  }

  organizeCommentList() {
    let comments = Object.keys(this.props.comments)
    let organizedComments = [];
    organizedComments.push(comments.unshift())

    while (comments) {
      let commentId = this.props.comments[organizedComments[organizedComments.length-1]].Id
      for (let i = 0; i < comments.length; i++) {
        let commentParentId = this.props.comments[comments[i]].parentId

        if (commentId === commentParentId) {
          organizedComments.push(comments.unshift())
        }
      }

      organizedComments.push(comments.unshift())
    }
    console.log(organizedComments)
    return organizedComments;
  }

  generateCommentList() {

    let organizedComments = this.organizeCommentList()

    return organizedComments.map(id => {
      let newClass
      if (!this.props.comments[id].parentId) {
        newClass = "parent"
      }

      this.showComments(this.props.comments[id].body, this.props.comments[id].userId, newClass)
    })
  }

  render() {
    let comments = this.generateCommentList()

    return (
      <>
        <div className="show-right-mid-body">
          <ul className="show-right-mid-ul">
              { this.showComments(this.props.postBodyText, this.props.currentUserId, "parent") }
              { comments }
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