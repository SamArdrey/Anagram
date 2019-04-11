import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header>
        <div className="header-box">
            <a href="/" className="header-left-container">
              <img className="header-camera-image" src={window.images.camera}/>
              <p className="header-vertical-line"> | </p>
              <div className="header-logo"> Anagram </div>
            </a>
          <span className="header-right-container">
            <div className="header-right">
            <button onClick={() => this.props.openCreatePostModal('create')} className="header-upload-image-c">
              <img className="header-upload-image" src={window.images.upload}/>
            </button>
            <a href={`/#/${this.props.currentUserId}`} className="header-person-image">
                <img className="header-person-image" src={window.images.person}/>
              </a>
            </div>
          </span>
        </div>
      </header>
    )
  }
}

export default Header;