# Anagram
[Live Demo] (http://www.myanagram.herokuapp.com/#/)

Anagram is a social photo sharing website, inspired by instagram. It uses Rails and PostreSQL on the backend and React.js and Redux on the front.

The first run on this website was designed and built in less than a two week timespan.

##Anagram

* BCrypt-based frontend to backend user auth
* Users can view and upload photos
* Users can comment on posts

## Nested Comments
Comments are nested to their parent comments. Comments can be nested once.

[Nested Comments]: (/Users/admin/Desktop/Anagram/docs/images/nested_comments.png "Anagram Nested Comments")

This was accomplished by bubble sorting an array of the comment ids, and using this to key into the comment object.

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

