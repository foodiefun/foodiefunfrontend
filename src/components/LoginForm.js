import React, { Component } from 'react';

import { login } from './AxiosLogin';

import { connect } from 'react-redux';
// import { login } from '../actions/index';
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      errors: {},
      userId: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log('login!!')
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <div>
        <div className="loginform">
          <form onSubmit={this.handleLogin} style={loginform}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
              style={inputStyle}
            />
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              style={inputStyle}
            />
            <button>
              {' '}
              Login
              {/* {this.props.isLoggingIn ? (
                <img
                  src="https://ya-webdesign.com/images/minimalist-transparent-loading-gif-11.gif"
                  alt=""
                  loadDots
                />
              ) : (
                'Login'
              )} */}
            </button>
            {this.props.error && <p className="error">{this.props.error}</p>}
            <p>Forgot your Password?</p>
            <button>
              <Link to="/register">Create Account</Link>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, isLoggingIn }) => ({
  error,
  isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);

const loginform = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '250px',
  margin: 'auto',
  marginTop: '80px'
};

const inputStyle = {};
