import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBottom extends Component {
logOut(e){
  e.preventDefault();
  localStorage.removeItem('usertoken')
  this.props.history.push('/')
  console.log('logged out')
}


render() {
   return(
    <div style={navb}>
    <Link to='/'> <i className="fas fa-home"></i></Link>
    <Link to='/add-new'> <i className="fas fa-plus-circle"></i></Link>
    <Link to="/edit"> <i className="far fa-edit"></i></Link>
     <i className="fas fa-sign-out-alt" onClick={this.logOut.bind(this)}></i>
   </div>

   )
 }
}

export default NavBottom

const navb = {
  width: '100%',
  fontSize: '4rem',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#F1F3D7',
  textShadow: ''
}

