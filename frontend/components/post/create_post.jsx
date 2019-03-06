import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyText: "",
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.selectFile = this.selectFile.bind(this);
  }

  handleInput(e) {
    this.setState({bodyText: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body_text]', this.state.bodyText);
    formData.append('post[author_id]', this.props.author);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON);
      }
    );
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  selectFile() {
    const button = document.getElementById("fileUpload");
    button.click();
  }

  render() {
    const photoPreview = this.state.photoUrl ?
      <img className="create-post-left-image" src={this.state.photoUrl} />
      : null;

    return (
      <div className="create-post-container">
        <div className="create-post-left">
          <div className="create-post-left-image-container">
            {photoPreview}
          </div>
        </div>
        <div className="create-post-right">
          <form className="create-post-form" onSubmit={this.handleSubmit}>
            <div className="create-post-right-file-button" onClick={this.selectFile}>
            <p className="create-post-right-choose-image">Choose Image</p>
              <input
                type="file"
                className="create-post-right-file-input"
                id="fileUpload"
                onChange={this.handleFile}
              />
            </div>
            <textarea
              id="post-body"
              className="create-post-right-text-area"
              cols="30"
              rows="10"
              value={this.state.bodyText}
              onChange={this.handleInput}>
                Write a caption.Write a caption.Write a caption.Write a caption.Write a caption.Write a caption.
            </textarea>
            <input
              type="submit"
              className="create-post-right-button"
              value="Submit!"
              disabled={!Boolean(this.state.photoFile)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default CreatePost;