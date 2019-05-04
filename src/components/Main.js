import React, { Component } from 'react';
import SortMenu from './SortMenu';
import NavBottom from './NavBottom';
import AddNew from './AddNew';
import FoodList from './FoodList';
// import Delete from './Delete';
// import Edit from './Edit';
// import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Delete from './Delete';
import { connect } from 'react-redux';
import { getData, deletePost } from '../actions';
import jwt_decode from 'jwt-decode';
import EditForm from './EditForm';
import { Link } from 'react-router-dom';
// import  fetchReducer from '../reducers';
import Edit from './Edit';
import '../App.css';

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
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      email: decoded.email
    });
  }

  render() {
    // console.log(this.props.restaurants);
    return (
      <div>
       
        <Route exact path="/" render={props => <FoodList {...props} posts={this.props.restaurants} />} />
       
      
        {/* <Delete /> */}
        <Route exact path="/add-new" component={AddNew} />
        <Route
          exact
          path="/edit/:id"
          render={props => <Edit posts={this.props.restaurants} {...props} />}
        />
        <NavBottom />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.fetchReducer.restaurants,
    foodieFetch: state.foodieFetch,
    foodieError: state.foodieError
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todoText => dispatch({type: 'FOODIE_DELETE', payload: todoText })
//   }
// }

export default connect(
  mapStateToProps,
  { getData, deletePost }
)(Main);

const imageStyle = {
  width: '400px',
  height: '300px'
};
