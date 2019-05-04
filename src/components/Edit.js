import React, { Component } from 'react'
import {connect} from 'react-redux';
import { updateFoodie } from '../actions';
import {Link} from 'react-router-dom';
import EditForm from './EditForm';

class Edit extends Component {
constructor(props){
  super(props);

}


  editPost = e => {
    this.props.updateFoodie(this.props.id)
  }
  
    render() {
      // const post_id = this.props.
      // const posts = this.props.location.state 
      const post = this.props.posts.filter(p => p.id !== this.props.match.params.id)[0]
      console.log(post)
      return (
        <>
            {this.props.posts.length ? <EditForm post={post}/> : null}

        </>
      )
    }
  }
  
  export default connect(null, {updateFoodie})(Edit)
  