import React, { Component } from 'react';
import SortMenu from './SortMenu';
import Delete from './Delete';
import Edit from './Edit';
// import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData } from '../actions';

// import  fetchReducer from '../reducers';

export class Main extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    // console.log(this.props.restaurants)
    return (
      <div>
        {this.props.restaurants.map(post => (
          <div>
            <h2>{post.restaurantName}</h2>
            <img src={post.photo} alt='alt' style={imageStyle} />
            <p>Date Visited - {post.date}</p>
            <p>Price {post.price}</p>
            <p>Rating {post.rating}</p>
            <h4>Restaurant Info</h4>
            <p>{post.restaurantInfo}</p>
          </div>
        ))}
        Main Workz!!
      
        <SortMenu />
        <Delete />
        <Edit />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.fetchReducer.restaurants,
    foodieFetch: state.foodieFetch
    
  };
};

export default connect(mapStateToProps,{ getData} )(Main);

const imageStyle = {
  width: '400px',
  height: '300px'
}

