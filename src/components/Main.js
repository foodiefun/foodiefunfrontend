import React, { Component } from 'react';
import SortMenu from './SortMenu';
import Delete from './Delete';
import Edit from './Edit';
// import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData } from '../actions';

export class Main extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        {this.props.restaurants.map(rest => (
          <div key={rest.id}>
            <h2>{rest.name}</h2>
          </div>
        ))}
        Main Works!!
        <SortMenu />
        <Delete />
        <Edit />
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => ({
  restaurants
});

export default connect(
  mapStateToProps,
  { getData }
)(Main);

