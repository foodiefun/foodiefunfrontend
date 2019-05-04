import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
// import { registerUser } from '../actions/Authentication';
import { register } from './AxiosLogin';



class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    register(newUser).then(res => {
      this.props.history.push('/login');
    });
  };

 

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: '50px', width: '700px' }}>
        <h2 style={{ marginBottom: '40px' }}>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
           
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
           
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register User
            </button>
          </div>
        </form>
      </div>
    );
  }
}



export default connect(
  null,
  { register }
)(withRouter(Register));
