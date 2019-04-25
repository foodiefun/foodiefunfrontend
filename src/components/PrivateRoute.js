import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  token,
  errorStatusCode,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        token && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
//                      this is token from state
const mapStateToProps = ({ token, errorStatusCode }) => ({
  token
});
// the mapstatetoprops can also be written like:
//const mapStateToProps = state => {
//return {token: state.token
//  };
//};
//the one above is the shorthand version.
export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
