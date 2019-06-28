import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      parent_id: null,
      post_id: this.props.currentPostId,
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="show-right-bottom-body">
        { this.submitForm("comment-form") }
      </div>
    )
  }

}

export default CommentForm;