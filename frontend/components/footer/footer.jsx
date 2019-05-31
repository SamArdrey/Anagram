import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <footer>
        <div className="footer-insides">
          <nav>
            <a href="https://github.com/SamArdrey" className="github">
            <i className="fa fa-github" /> Github
            </a>
            <a href="https://www.linkedin.com/in/sam-ardrey/" className="linkin">
              <i className="fa fa-linkedin" /> LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer;