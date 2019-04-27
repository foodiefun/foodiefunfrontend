import React, { Component } from 'react';

import { login } from '../actions/index';
import { connect } from 'react-redux';

export class LoginForm extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credential)
      .then(() => this.props.history.push('/home'));
  };

  render() {
    return (
      <div>
        <div className="loginform">
          <form onSubmit={this.handleLogin}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button>
              {this.props.isLoggingIn ? (
                <img
                  src="https://ya-webdesign.com/images/minimalist-transparent-loading-gif-11.gif"
                  alt=""
                  loadDots
                />
              ) : (
                'Login'
              )}
            </button>
            {this.props.error && <p className="error">{this.props.error}</p>}
            <p>Forgot your Password?</p>
            <button>Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
