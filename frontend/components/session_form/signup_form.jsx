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
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="background">
        <div className="signup-page-container">
          <h1 className="signup-header">Anagram</h1>
          <div className="sign-up-text">
            <p className="signup-message">Sign up to see photos and videos from your friends</p>
          </div>
          <div className="demo-login">
            <button className="demo-signup-button" onClick="">
              Demo Login
            </button>
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
                    placeholder="Email"
                  />
                <br/>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="signup-input"
                    placeholder="Name"
                  />
                <br/>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signup-input"
                    placeholder="Username"
                  />
                <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signup-input"
                    placeholder="Password"
                  />
                <br/>
                <button className="signup-submit" type="submit" value={this.props.formType}>Sign up</button>
              </div>
            </form>
            <div className="terms">
              <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy</p>
            </div>
          </div>
          <div className="switch-to-login-container">
            <p className="switch-to-login-text">Have an account? <Link className="login-link" to="/login">Log in</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;