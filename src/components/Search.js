import React, { Component } from 'react';
import { SEARCH } from '../actions';

import store from '../Store';

export class Search extends Component {
  state = {};

  handleChange = e => {
    store.dispatch({ type: SEARCH, payload: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;

// export class Search extends Component {
//   constructor() {
//     super();
//     this.state= {
//       search: '',
//       restaurantName: '',
//       photo: '',
//       foodName: '',
//       foodType: '',
//       comments: '',
//       rating: null,
//       price: null,
//       date: '',
//       restaurantInfo: '',
//       favorite: null,

//     };
//     this.handleChange = this.handleChange.bind(this)
//   }
// componentDidMount() {

//   this.setState({
//       search: this.props.posts,
//       restaurantName: this.props.restaurantName,
//       photo: this.props.photo,
//       foodName: this.props.foodName,
//       foodType: this.props.foodType,
//       comments: this.props.comments,
//       rating: this.props.rating,
//       price: this.props.price,
//       date: this.props.date,
//       restaurantInfo: this.props.restaurantInfo,
//       favorite: this.props.favorite

//   });

// }
//     handleChange = event => {
//         const input = event.target.value;
//         this.setState({
//           searchString: this.refs.search.value
//         });
//         this.props.handleSearch(input);
//       };

//   render() {
//       let type = this.state.foodType;
//       let search = this.state.searchString.trim().toLowerCase();

//   if (search.length > 0) {
//     type = type.filter(function(foodType) {
//       return type.foodType.toLowerCase().match(search);
//     })
//   }
//     ;
//     return (

//       <div>
//           <input placeholder="Search"
//           value={this.state.search}
//           onChange={this.handleChange} />

//       </div>
//     )
//   }
// }

// export default Search
