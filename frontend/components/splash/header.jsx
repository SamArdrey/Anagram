import React from 'react';

class HeaderPartial extends React.Component {
  render(){
    return(
      <header>
      <div className="header-content">
        <div className="header-left">
          <a href="/">
            <img className="header-camera-image" src={window.images.camera}/>
            <p className="header-vertical-line"> | </p>
            <div className="header-logo"> Anagram </div>
          </a>
        </div>
        <div className="header-mid"></div>
        <div className="header-right">
        <a href="/" className="header-compass-link">
            <img className="header-compass-image" src={window.images.compass}/>
          </a>
          <a href="/" className="header-heart-link">
            <img className="header-heart-image" src={window.images.heart}/>
          </a>
          <a href="/" className="header-person-link">
            <img className="header-person-image" src={window.images.person}/>
          </a>
        </div>
      </div>
    </header>
    )
  }
}

export default HeaderPartial;
