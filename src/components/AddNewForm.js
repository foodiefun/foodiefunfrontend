import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { addFoodie } from '../actions';
import axios from 'axios';

const restTypes = [
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Fine Dining', label: 'Fine Dining' },
  { value: 'Asian', label: 'Asian' },
  { value: 'Bar-Tavern', label: 'Bar-Tavern' },
  { value: 'Italian-French', label: 'Italian-French' },
  { value: 'Other', label: 'Other' }
];

const price = [
  { value: '💲', label: '💲' },
  { value: '💲💲', label: '💲💲' },
  { value: '💲💲💲', label: '💲💲💲' },
  { value: '💲💲💲💲', label: '💲💲💲💲' },
  { value: '💰💰💰💰💰', label: '💰💰💰💰💰' }
];
const rating = [
  { value: '⭐', label: '⭐' },
  { value: '⭐⭐', label: '⭐⭐' },
  { value: '⭐⭐⭐', label: '⭐⭐⭐' },
  { value: '⭐⭐⭐⭐', label: '⭐⭐⭐⭐' },
  { value: '⭐⭐⭐⭐⭐', label: '⭐⭐⭐⭐⭐' }
];

export class AddNewForm extends Component {
  constructor() {
    super();

    this.state = {
      restaurantName: '',
      date: '',
      foodType: '',
      price: '',
      rating: '',
      comments: '',
      restaurantInfo: '',
      selectedFile: null,
      photo: '',
      favorite: '',
      id: 1
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectChange = selectedOption => {
    this.setState({
      selectedOption
    });
    console.log(`Option selected: ${selectedOption}`);
  };

  selectChangeTwo = selectedOptionTwo => {
    this.setState({
      selectedOptionTwo
    });
    console.log(`Option selected: ${selectedOptionTwo}`);
  };

  selectChangeThree = selectedOptionThree => {
    this.setState({
      selectedOptionThree
    });
    console.log(`Option selected: ${selectedOptionThree}`);
  };

  addReview = e => {
    e.preventDefault();
    let data = { ...this.state };
    this.props.addFoodie(data);
    this.setState({
      restaurantName: '',
      date: '',
      foodType: '',
      price: '',
      rating: '',
      comments: '',
      restaurantInfo: '',
      selectedFile: null,
      photo: '',
      favorite: '',
      id: 1
    });
  };




  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post(`https://foodiefun.herokuapp.com/api/review/${this.state.id}/images`, fd, {
        onUploadProgress: progressEvent =>
          console.log(
            'UploadProgress: ' +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              '%'
          )
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedOptionTwo } = this.state;
    const { selectedOptionThree } = this.state;
    return (
      <div>
        <form action="" style={formStyle} onSubmit={this.addReview}>
          <input
            type="text"
            name="name"
            style={inputStyle}
            placeholder="Name"
            value={this.state.name}
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
          <Select
            value={selectedOption}
            options={restTypes}
            placeholder="Restaurant Types"
            onChange={this.selectChange}
          />
          <Select
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
          />
          <input
            type="text"
            name="comment"
            style={inputStyle}
            placeholder="Comments"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="info"
            style={inputStyle}
            placeholder="Info"
            value={this.state.info}
            onChange={this.handleChange}
          />
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler} style={buttonStyle}>
            Upload Photo!
          </button>
          
          <button style={buttonStyle}>Add New</button>
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
