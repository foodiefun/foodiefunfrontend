import React, { Component } from 'react';
import SortMenu from './SortMenu';
// import Delete from './Delete';
// import Edit from './Edit';
// import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData, deletePost } from '../actions';
import jwt_decode from 'jwt-decode';

// import  fetchReducer from '../reducers';


export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      errors: {}
    };
  }

  componentDidMount() {
this.props.getData();
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      email: decoded.email
     
    });
  }

 
  render() {
    // console.log(this.props.restaurants)
    return (
      <div>
        {this.props.restaurants.map(post => (
          <div key={post.id}>
            <h2>{post.restaurantName}</h2>
            <img src={post.photo} alt="alt" style={imageStyle} />
            <button>DELETE</button>
            
            <p>Date Visited - {post.date}</p>
            <p>Price {post.price}</p>
            <p>Rating {post.rating}</p>
            <h4>Restaurant Info</h4>
            <p>{post.restaurantInfo}</p>
          </div>
        ))}
        Main Workz!!
        <SortMenu />
        {/* <Delete /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.fetchReducer.restaurants,
    foodieFetch: state.foodieFetch,
    foodieError: state.foodieError,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todoText => dispatch({type: 'FOODIE_DELETE', payload: todoText })
//   }
// }


export default connect(
  mapStateToProps,{getData, deletePost}
)(Main);

const imageStyle = {
  width: '400px',
  height: '300px'
};
