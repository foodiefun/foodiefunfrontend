import React, { Component } from 'react'

export class LoginForm extends Component {







  render() {
    return (
      <div>
        <div className="loginform">
          <form onSubmit={this.handleLogin}>
            <input
              type="text"
              name="username"
              // value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              type="text"
              name="password"
              // value={this.state.credentials.password}
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
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
