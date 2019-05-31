import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.post.likes
    };

    this.toggleLike = this.toggleLike.bind(this);
    this.isLiked = this.isLiked.bind(this);
  }

  toggleLike() {
    if (this.isLiked()) {
      this.props.deleteLike(this.props.likes[this.props.post.id]).then(() => {
        this.props.fetchAllLikes();
      });
      this.setState({likeCount: this.state.likeCount-1});
    } else {
      this.props.createLike(this.props.post.id).then(() => {
        this.props.fetchAllLikes();
      });
      this.setState({likeCount: this.state.likeCount+1});
    }
  }

  isLiked() {
    return (!!this.props.likes[this.props.post.id]);
  }

  render() {
    let isLiked;
    if (this.isLiked()) {
      isLiked = window.images.liked;
    } else {
      isLiked = window.images.like;
    }

    console.log(this.state.likeCount);
    return(
      <div className="likes-container">
        <button onClick={() => this.toggleLike()} className="like-button">
          <img className="like-image" src={isLiked}/>
        </button>
        <div className="num-likes">
          Liked by {this.state.likeCount} people
        </div>
      </div>
    )
  }
}

export default Likes;