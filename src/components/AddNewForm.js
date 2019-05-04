import React, { Component } from 'react';
// import Select from 'react-select';
import { connect } from 'react-redux';
import { addFoodie } from '../actions';
import {Link} from 'react-router-dom';
// import {Link} from 'react-router';
// import axios from 'axios';

const foobar = localStorage.getItem('userId')


const restTypes = [
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Fine Dining', label: 'Fine Dining' },
  { value: 'Asian', label: 'Asian' },
  { value: 'Bar-Tavern', label: 'Bar-Tavern' },
  { value: 'Italian-French', label: 'Italian-French' },
  { value: 'Other', label: 'Other' }
];

const price = [
  { value: '$', label: '$' },
  { value: '$$', label: '$$' },
  { value: '$$$', label: '$$$' },
  { value: '$$$$', label: '$$$$' },
  { value: '$$$$$', label: '$$$$$' }
];
const rating = [
  { value: '*', label: '*' },
  { value: '***', label: '***' },
  { value: '***', label: '***' },
  { value: '****', label: '****' },
  { value: '****', label: '⭐⭐⭐⭐⭐' }
];
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

  selectChange = selectedOption => {
    this.setState({
      restTypes
    });
    console.log(`Option selected: ${selectedOption}`);
  };

  selectChangeTwo = selectedOptionTwo => {
    this.setState({
      price
    });
    console.log(`Option selected: ${selectedOptionTwo}`);
  };

  selectChangeThree = selectedOptionThree => {
    this.setState({
      rating
    });
    console.log(`Option selected: ${selectedOptionThree}`);
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

    let data = {
      // id: 180948594570,
      // restaurantName: "Archive",
      // photo: "https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg",
      // foodName: "Chilean Sea Bass",
      // foodType: "Seafood",
      // comments: "Best bass I have ever eaten",
      // rating: 5,
      // price: 3,
      // date: "4-29-2019",
      // restaurantInfo: "12345 Main Street, Salem, Oregon 97303",
      // favorite: true,
      // userId: 9
      ...this.state
    } ;
    this.props.addFoodie(data);
    
   
    console.log(this.state)
  };




  // fileSelectedHandler = event => {
  //   console.log(event.target.files[0]);
  //   this.setState({
  //     selectedFile: event.target.files[0],

  //   });
  // };

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  //   axios
  //     .post(`https://foodiefun.herokuapp.com/api/review/1/images`, fd, {
  //       onUploadProgress: progressEvent =>
  //         console.log(
  //           'UploadProgress: ' +
  //             Math.round((progressEvent.loaded / progressEvent.total) * 100) +
  //             '%'
  //         )
  //     })
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  render() {
    // const { selectedOption } = this.state;
    // const { selectedOptionTwo } = this.state;
    // const { selectedOptionThree } = this.state;
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

          {/* <Select
            options={price}
            placeholder="Price"
            value={selectedOptionTwo}
            onChange={this.selectChangeTwo}
          />
          <Select
            options={rating}
            placeholder="Rating"
            value={selectedOptionThree}
            onChange={this.selectChangeThree}
          /> */}
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
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler} style={buttonStyle}>
            Upload Photo!
          </button>
          
          <button style={buttonStyle} type='submit'>Add New</button>
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
