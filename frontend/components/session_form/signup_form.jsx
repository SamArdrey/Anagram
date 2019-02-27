import React from 'react';

class SignupForm extends React.Component {
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Anagram</h1>
          <br/>
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value="Email"
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="text"
                value="Full Name"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="text"
                value="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value="Password"
                onChange={this.update('password')}
                className="login-input"
                autocorrect="off"
              />
            </label>
            <br/>
            <button className="session-submit" type="submit">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;