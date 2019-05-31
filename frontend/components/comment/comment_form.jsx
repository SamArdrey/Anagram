import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      parent_id: null,
      post_id: this.props.currentPostId,
    };

    this.formType = {};

    this.submitForm = this.submitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.generateCommentList = this.generateCommentList.bind(this);
    this.commentType = this.commentType.bind(this);

    this.commentType();
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

  commentType() {
    if (this.props.formType === 'Explore Form') {
      this.formType['midBody'] = "show-right-mid-body-explore",
      this.formType['midUl'] = "show-right-mid-ul-explore",
      this.formType['bottomBody'] = "show-right-bottom-body-explore"
    } else {
      this.formType['midBody'] = "show-right-mid-body",
      this.formType['midUl'] = "show-right-mid-ul",
      this.formType['bottomBody'] = "show-right-bottom-body"
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = Object.assign({}, this.state);
    this.props.createComment(body).then(() => {
        this.setState({
        body: '',
        parent_id: null,
        post_id: this.props.currentPostId
        })
    });
  }

  update() {
    return e => this.setState({
      body: e.currentTarget.value,
    });
  }

  render(){
    return (
      <div className={this.formType.bottomBody}>
        { this.submitForm("comment-form") }
      </div>
    )
  }

}

export default CommentForm;