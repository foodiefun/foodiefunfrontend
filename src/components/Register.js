import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { registerUser } from '../actions/Authentication';
import { register } from './AxiosLogin';
import classnames from 'classnames';
// import Axios from 'axios';

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
      //   password_confirm: this.state.password_confirm
    };

    register(newUser).then(res => {
      this.props.history.push('/login');
    });
  };

  // componentWillReceiveProps(nextProps) {
  //     if(nextProps.auth.isAuthenticated) {
  //         this.props.history.push('/')
  //     }
  //     if(nextProps.errors) {
  //         this.setState({
  //             errors: nextProps.errors
  //         });
  //     }
  // }

//   componentDidMount() {
//     // if (this.props.auth.isAuthenticated) {
//     //   this.props.history.push('/');
//     // }
//   }

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

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

export default connect(
  null,
  { register }
)(withRouter(Register));
