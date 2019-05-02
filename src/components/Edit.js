import EditForm from './EditForm';




import React, { Component } from 'react'

class Edit extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      restaurantName: this.props.name,
      date: this.props.date,
      foodType: this.props.restTypes,
      price: this.props.price,
      rating: this.props.rating,
      comments: this.props.comments,
      restaurantInfo: this.props.info,
      photo: this.props.photo,
      favorite: this.props.favorite,
      id: 1
    };
  }
  


  render() {
    return (
      <div>
        <EditForm editprops={this.state.props}/>
        edit works!
      </div>
    )
  }
}


export default Edit;



