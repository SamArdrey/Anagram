import React from 'react';
import { openCreatePostModal } from '../../actions/modal_actions';

class Header extends React.Component {
  render(){
    return(
      <header>
        <div className="header-box">
          <div className="header-left">
            <a href="/">
              <img className="header-camera-image" src={window.images.camera}/>
              <p className="header-vertical-line"> | </p>
            </a>
            <a href="/" className="header-logo-container">
              <div className="header-logo"> Anagram </div>
            </a>
          </div>
          <div className="header-right">
          <button onClick={() => this.props.openCreatePostModal('create')} className="header-upload-image-c">
            <img className="header-upload-image" src={window.images.upload}/>
          </button>
          <a href={`/#/${this.props.currentUserId}`} className="header-person-image">
              <img className="header-person-image" src={window.images.person}/>
            </a>
          </div>
        </div>
    </header>
    )
  }
}

export default Header;