import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {login} from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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

  demologin(e) {
    e.preventDefault();
    const user = {
      user: 'SamArdrey',
      password: 'thisisAfuckingpassword'
    };
    this.props.login(user)
      .then(() => this.props.history.push('/'));
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
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    name="username"
                    placeholder="Username"
                  />
                <br/>
                  <input type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                  />
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>
        <div className="or-div">
          <p> --------------------------------       OR       -------------------------------</p>
        </div>
        <div className="demo-login">
            <button className="demo-login-button" onClick={this.demologin}>
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