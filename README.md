# Anagram
[Live Demo](https://myanagram.herokuapp.com/#/)

Anagram is a social photo sharing website, inspired by instagram. It uses Rails and PostreSQL on the backend and React.js and Redux on the front.

The first run on this website was designed and built in less than a two week timespan.

## Anagram

* BCrypt-based frontend to backend user auth
* Users can view and upload photos
* Users can comment on posts

## Nested Comments
Comments are nested to their parent comments. Comments can be nested once.

![Nested Comments](https://github.com/SamArdrey/Anagram/blob/master/docs/images/nested_comments.png)

This was accomplished by bubble sorting an array of the comment ids, and using this to key into the comment object. Note: I will be refactoring this down to On or On log n in the near future.

```
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
```

## Photo Upload
Users can make posts, upload and preview associated photos.

![Photo Upload](https://github.com/SamArdrey/Anagram/blob/master/docs/images/Upload.png)

This ability to preview was attained through a fileReader function. If an image is present, it pops up on the screen.

```
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body_text]', this.state.bodyText);
    formData.append('post[author_id]', this.props.author);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.uploadPhoto(formData).then(() => this.props.closeModal());
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
  ```

## Project Design
The goal of Anagram was to implement a small and yet robust website. The goal was to learn as much about the interaction between Rails and React, as well as, the Redux cycle.

Considering the two week time constraint, the goal was to focus on making the core features neat and bug free.

## Technologies
On the backend, Rails and Heroku were chosen due to its ability for quick app scaling.

For the frontend, Redux states were setup with separate actions for users, posts, comments and errors. Keeping the state normalized makes compartmentalization an ease and redundancy low.

Images were hosted via AWS

## Additional Resources
* [Schema](https://github.com/SamArdrey/ThisIsNotInstagram/wiki/Schema)

* [State Shape](https://github.com/SamArdrey/ThisIsNotInstagram/wiki/State-Shape)

* [Backend Routes](https://github.com/SamArdrey/Anagram/wiki/backend-routes)

* [Frontend Routes](https://github.com/SamArdrey/Anagram/wiki/frontend-routes)

* [MVP List](https://github.com/SamArdrey/Anagram/wiki/mvp-list)

## Planned Future Features
I am planning on adding the following:
* Feed
* Profile pages for other users
* Ability to make sub-comments
* Likes and follows
* Refactor comments using an algorithm inspired by merge sort
