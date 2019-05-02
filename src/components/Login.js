import React from 'react'
import LoginForm from './LoginForm';
// import foodiefunlogosmall from '../assets/foodiefunlogosmall.svg';
import logooffwhite from '../assets/logooffwhite.svg';
import '../App.css';


function Login() {
  return (
    <div style={bglogin} >
      <img src={logooffwhite} alt="" style={logo} className='App-logo'/>
      <LoginForm />
     
    </div>
  )
}

export default Login;

const logo ={
  width: '200px',
  marginTop: '50px',
}
const bglogin ={
  backgroundColor: '#75B207',
  height: '600px'
}
// const imgStyle={
//   background:'url(https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize:'cover',
//   height: '1000px',
//   width:'100%',
//   minWidth:'435px',
//   maxWidth: '1024px',
//   margin: '0px',
//   padding: '0px',
// }