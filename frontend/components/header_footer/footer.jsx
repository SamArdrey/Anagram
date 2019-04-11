import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <footer>
        <div className="footer-insides">
          <a href="github.com" className="fa fa-github">
            Github
          </a>
          <a href="https://www.linkedin.com/in/sam-ardrey/" className="fa fa-linkedin">
            LinkedIn
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;