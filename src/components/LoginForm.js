import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../actions/index';


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
      .login(this.state.credentials)
       .then(() => console.log('logged in!'));
      //  .then(() => this.props.history.push('/protected'));
       //the problem is here
  };

  render() {
    return (
      <div>
        <div className="loginform">
          <form onSubmit={this.handleLogin} style={loginform}>
          <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
              style={inputStyle}
            />
            <input
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="Password"
              style={inputStyle}
            />
            <button> Login
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
            <button>Create Account</button>
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




const loginform ={
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  width: '250px',
  margin: 'auto',
  marginTop: '80px',
}

const inputStyle ={

}

