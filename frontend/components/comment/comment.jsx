import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      parent_id: null,
      post_id: this.props.currentPostId,
    };

    this.showComments = this.showComments.bind(this);
    this.generateCommentList = this.generateCommentList.bind(this);
    this.organizeComments = this.organizeComments.bind(this);
    this.mergeComments = this.mergeComments.bind(this);
    this.commentType = this.commentType.bind(this);
  }

  componentDidMount() {
    if (this.props.formType !== 'Explore Form') {
      this.props.fetchComments(this.props.currentPostId);
    }
  }

  commentType(className) {
    if (this.props.formType === 'Explore Form') {
      return `${className}-explore`;
    } else {
      return className;
    }
  }

  showComments(comment, newClass, key) {
    let newClassName = (newClass == "parent" ? "parent-comment" : "child-comment");
    let link = "/#/" + comment.userId;

    if (comment) {
      return (
        <li key={ key } className={ newClassName }>
          <div className="comment-body">
            <a href={link} className="comment-username">{ comment.user.username }</a>: { comment.body }
          </div>
        </li>
      )
    } else {
      return (
        <div></div>
      );
    }
  }

  generateCommentList() {
    let organizedComments = this.organizeComments();

    return organizedComments.map(id => {
      let newClass;
      if (!this.props.comments[id].parentId) {
        newClass = "parent";
      }
      return this.showComments(this.props.comments[id], newClass, id);
    })
  }

  organizeComments() {
    let comments = Object.keys(this.props.comments);
    comments = comments.filter(id => this.props.comments[id].postId == this.state.post_id)

    const parents = [];
    const children = [];

    if (comments.length === 0) return [];

    while (!!comments[0]) {
      const parentId = this.props.comments[comments[0]].parentId

      if (!!parentId) {
        children.push(comments[0])
      } else {
        parents.push(comments[0])
      }

      comments.shift();
    }

    return this.mergeComments(parents, children);
  }

  mergeComments(parents, children) {

    const merged = [parents[0]];
    parents.shift();

    while (!!parents[0] && !!children[0]) {
      const parentId = this.props.comments[children[0]].parentId

      //If the last comment pushed into merged had a parentId, then we use that
      // to find the next comment, else, we use the comments regular id
      const lastMerged = (!!this.props.comments[merged[merged.length-1]].parentId ?
        this.props.comments[merged[merged.length-1]].parentId :
        this.props.comments[merged[merged.length-1]].id)

      if (parentId && parentId === lastMerged) {
        merged.push(children[0]);
        children.shift();
      } else {
        merged.push(parents[0]);
        parents.shift();
      }
    }

    return merged.concat(parents).concat(children);
  }

  render() {
    const userCommentObject = {
      body: this.props.postBodyText,
      userId: this.props.post.authorId,
      user: { username: this.props.post.username }
    };

    return (
      <div className={this.commentType("show-right-mid-body")}>
        <ul className={this.commentType("show-right-mid-ul")}>
            { this.showComments(userCommentObject, "parent", 0) }
            { this.generateCommentList() }
        </ul>
      </div>
    )
  }
}

export default Comment;