import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFoodie } from '../actions';
import {Link} from 'react-router-dom';



 
  
  export class EditForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: null,
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
  


  componentDidMount() {
    console.log(this.props.post)
     this.props.post && this.setState({
        id: this.props.post.id,
        restaurantName: this.props.post.restaurantName,
        photo: this.props.post.photo,
        foodName: this.props.foodName,
        foodType: this.props.post.foodType,
        comments:this.props.comment,
        rating: this.props.post.rating,
        price: this.props.post.price,
        date:this.props.post.date,
        restaurantInfo: this.props.post.restaurantInfo,
        favorite: this.props.post.favorite,
        userId: this.props.post.userId
     
      })
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
  
    // deleteReview = e => {
    //   this.props.actions.deletePost(this.state.restaurants)
    // }

    UpdateHandler = e =>{
      e.preventDefault();
    
    
    }
    editPost = e => {
      this.props.updateFoodie(this.props.id)
    }
   
  
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
          
          <button style={buttonStyle} type='submit'>Update!</button>
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
    {updateFoodie }
  )(EditForm);


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
  


  // class Edit extends Component {
  //   constructor(props){
  //     super(props);
    
  //   }
    
    
  //     editPost = e => {
  //       this.props.updateFoodie(this.props.id)
  //     }
      
  //       render() {
  //         return (
  //           <div>
  //             <Link to=''> <button onClick={()=>this.editPost()}>Edit</button></Link>
  //           </div>
  //         )
  //       }
  //     }
      
  //     export default connect(null, {updateFoodie})(Edit)