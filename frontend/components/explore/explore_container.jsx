import { fetchAllPosts } from "../../actions/post_actions";
import { fetchAllComments } from "../../actions/comment_actions";
import { fetchAllLikes } from "../../actions/like_actions";
import Explore from './explore';

import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    comments: state.entities.comments,
    posts: state.entities.posts
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchAllPosts: () => dispatch(fetchAllPosts()),
      fetchAllLikes: () => dispatch(fetchAllLikes()),
      fetchAllComments: () => dispatch(fetchAllComments())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
