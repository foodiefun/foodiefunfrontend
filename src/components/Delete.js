import React, { Component } from 'react'
import {connect} from 'react-redux';
import { deletePost } from '../actions';
import '../App.css';


class Delete extends Component {

deletePost = e => {
  this.props.deletePost(this.props.id)
}

  render() {
    return (
      <div>
         <button className='delete' onClick={()=>this.deletePost()}>Delete</button>
      </div>
    )
  }
}

export default connect(null, {deletePost})(Delete)
