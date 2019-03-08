import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      parentId: null,
      post_id: this.props.currentPostId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showComments = this.showComments.bind(this);
    this.generateCommentList = this.generateCommentList.bind(this);
    this.organizeCommentList = this.organizeCommentList.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.currentPostId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = Object.assign({}, this.state);
    this.state = {
      body: '',
      parentId: null,
      post_id: this.props.currentPostId
    };
    this.render();
    this.props.createComment(body);
  }

  update() {
    return e => this.setState({
      body: e.currentTarget.value,
    });
  }

  showComments(comment, newClass, key) {
    let newClassName = (newClass == "parent" ? "parent-comment" : "child-comment");

    if (comment) {
      return (
        <li key={ key } className={ newClassName }>
          <div className="comment-body">
            <a href="/" className="comment-username">{ comment.user.username }</a>: { comment.body }
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
    let comments = Object.keys(this.props.comments);
    let organizedComments = [];

    if (comments.length === 0) return [];

    while (comments.length > 0) {
      organizedComments.push(comments[0]);
      comments.shift();

      let commentId = this.props.comments[
        organizedComments[organizedComments.length-1]].id;

      for (let i = 0; i < comments.length; i++) {
        let commentParentId = this.props.comments[comments[i]].parentId;

        if (commentId === commentParentId) {
          organizedComments.push(comments[0]);
          comments.shift();
        }
      }
    }

    return organizedComments;
  }

  generateCommentList() {
    let organizedComments = this.organizeCommentList();

    return organizedComments.map(id => {
      let newClass;
      if (!this.props.comments[id].parentId) {
        newClass = "parent";
      }

      return this.showComments(this.props.comments[id], newClass, id);
    })
  }

  submitForm(newClassName) {
    return (
      <form onSubmit={ this.handleSubmit } className={ newClassName }>
        <input
          type="text"
          value={ this.state.body }
          onChange={ this.update() }
          className={ newClassName }
          placeholder="Add a comment..."
          name="comment"
          />
        <button type="submit" />
      </form>
    )
  }

  render() {
    const userCommentObject = { body: this.props.postBodyText,
      user: { username: this.props.currentUser }};

    return (
      <>
        <div className="show-right-mid-body">
          <ul className="show-right-mid-ul">
              { this.showComments(userCommentObject, "parent", 0) }
              { this.generateCommentList() }
          </ul>

        </div>
        <div className="show-right-bottom-body">
          { this.submitForm("comment-form") }
        </div>
      </>
    )
  }
}

export default Comment;