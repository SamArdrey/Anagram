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
    this.organizeComments = this.organizeComments.bind(this);
    this.mergeComments = this.mergeComments.bind(this);
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
    const comments = Object.keys(this.props.comments);

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