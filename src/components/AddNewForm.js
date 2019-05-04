import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addFoodie } from '../actions';
import {Link} from 'react-router-dom';


const foobar = localStorage.getItem('userId')



export class AddNewForm extends Component {
  constructor() {
    super();

    this.state = {
      id: Date.now(),
      restaurantName: '',
      photo: '',
      foodName: '',
      foodType: '',
      comments: '',
      rating: null,
      price: null,
      date: '',
      restaurantInfo: '',
      favorite: null,
      userId: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  componentDidMount() {
    this.setState({
      id: Date.now(),
      userId: foobar
    })
  }


  addReview = e => {
    e.preventDefault();
    this.setState({
      id: Date.now(),
      restaurantName: this.props.restaurantName,
      photo: this.state.photo,
      foodName: this.props.foodName,
      foodType: this.props.foodType,
      comments: this.props.comments,
      rating: this.props.rating,
      price: this.props.price,
      date: this.props.date,
      restaurantInfo: this.props.restaurantInfo,
      favorite: this.props.favorite,
      userId: foobar
    });

    let data = {...this.state} ;
    this.props.addFoodie(data);
    
   
    console.log(this.state)
  };






  render() {
   
    return (
      <div>
        <form style={formStyle} onSubmit={this.addReview}>
          <input
            type="text"
            name="restaurantName"
            style={inputStyle}
            placeholder="Name"
            value={this.state.restaurantName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="date"
            style={inputStyle}
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
           <input
            type="text"
            name="foodType"
            style={inputStyle}
            placeholder="Restauraunt Type"
            value={this.state.foodType}
            onChange={this.handleChange}
          />
          {/* <label>
            <input type='radio' value='option1' checked={this.state.foodType === 'Chinese'}  onChange={this.handleChange}/>
            Chinese
          </label>
          <label>
          <input type='radio' value='option2' checked={this.state.foodType === 'Mexican'} onChange={this.handleChange}/>
            Mexican
          </label>
          <label>
          <input type='radio' value='option3' checked={this.state.foodType === 'Italian'} onChange={this.handleChange}/>
            Italian
          </label> */}

          


            <input
            type="number"
            name="Price"
            style={inputStyle}
            placeholder="Price 1-5"
            value={this.state.price}
            onChange={this.handleChange}
          />
            <input
            type="number"
            name="rating"
            style={inputStyle}
            placeholder="Rating 1-5"
            value={this.state.rating}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="photo"
            style={inputStyle}
            placeholder="Place Image URL Here"
            value={this.state.photo}
            onChange={this.handleChange}
          />

         
          <input
            type="text"
            name="comments"
            style={inputStyle}
            placeholder="Comments"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="restaurantInfo"
            style={inputStyle}
            placeholder="Info"
            value={this.state.info}
            onChange={this.handleChange}
          />
        
          
          <button style={buttonStyle} type='submit' onClick={console.log('added!')}>Add New</button>
          <button style={buttonStyle}><Link to='/add-new'>Add Another</Link></button>
          <button style={buttonStyle}><Link to='/'>Return to Home</Link></button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant
});

export default connect(
  mapStateToProps,
  { addFoodie: addFoodie }
)(AddNewForm);

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '20px'
};

const inputStyle = {
  margin: '8px',
  padding: '10px'
};

const buttonStyle = {
  padding: '10px',
  width: '300px',
  margin: 'auto',
  marginBottom: '15px'
};
