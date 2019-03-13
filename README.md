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

This was accomplished by using a modified version of merge-sort. I wasn't able to refactor to better than 0n, however.

```
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
