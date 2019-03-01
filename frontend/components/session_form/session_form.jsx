import React from 'react';
import {
  Link,
  withRouter, Redirect
} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      value: "disabled"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  dissabled(field, e) {
    if (field === "username" && e.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      value: (this.dissabled(field, e.currentTarget.value) ? "disabled" : "")
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => <Redirect to='/' />)
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: 'user',
      password: 'password'
    };
    this.props.processForm(user);
  }

  handleChange(e) {

  }

  render() {
    return (
      <div className="background">
      <div className="login-page-container">
          <h1 className="login-header"> Anagram </h1>
        <div className="login-form-container">
          <div className="form">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>
              <div className="login-form">
                <br/>
                  <input type="text"
                    id="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    name="username"
                    required
                    />
                  <label htmlFor="username" className="login-username-label">Username</label>
                <br/>
                  <input type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    required
                  />
                  <label htmlFor="password" className="login-password-label">Password</label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} disabled={this.state.value}/>
              </div>
            </form>
          </div>
        </div>
        <div className="or-div">
          <p> --------------------------------       OR       -------------------------------</p>
        </div>
        <div className="demo-login">
            <button className="demo-login-button" onClick={this.demoLogin}>
              Demo Login
            </button>
          </div>
      </div>
        <div className="switch-to-signup-container">
          <p className="switch-to-signup-text">Don't have an account? <Link className="signup-link" to="/signup">Sign up</Link></p>
        </div>
      </div>
    );
  }
}

export default SessionForm;