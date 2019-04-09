import React from 'react';
import {
  Link,
} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    let errors = Object.keys(this.props.errors.userErrors).map((er) => (
      <li className="signup-error" key={er}>
        {this.props.errors.userErrors[er]}
      </li>
    ))

    return(
      <ul>
        {errors}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: 'Chuck',
      password: 'thisisApassword1'
    };
    this.props.login(user);
  }

  render() {
    return (
      <div className="background">
        <div className="signup-page-container">
          <h1 className="signup-header">Anagram</h1>
          <div className="sign-up-text">
            <p className="signup-message">Sign up to see photos and videos from your friends</p>
          </div>
          <div className="signup-demo-login">
            <button className="signup-demo-button" onClick={this.demoLogin}>
              Demo Login
            </button>
          </div>
          <div className="signup-or-div">
            <p> -------------------------------       OR       -------------------------------</p>
          </div>
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit} className="signup-form-box">
              <br/>
              <div className="signup-form">
                <br/>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="signup-input"
                    required
                  />
                  <label htmlFor="email" className="signup-email-label">Email</label>
                <br/>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="signup-input"
                    required
                  />
                  <label htmlFor="name" className="signup-name-label">Name</label>
                <br/>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signup-input"
                    required
                  />
                  <label htmlFor="username" className="signup-username-label">Username</label>
                <br/>
                  <input type="password"
                    value={ this.state.password }
                    onChange={ this.update('password') }
                    className="signup-input"
                    required
                  />
                  <label htmlFor="password" className="signup-password-label">Password</label>
                <br/>
                <button className="signup-submit" type="submit" value={this.props.formType}>Sign up</button>
              </div>
            </form>
            <div className="signup-error-container">
              { this.renderErrors() }
            </div>
            <div className="terms">
              <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
            </div>
          </div>
          <div className="switch-to-login-container">
            <p className="switch-to-login-text">Have an account? <Link className="login-link" to="/">Log in</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;