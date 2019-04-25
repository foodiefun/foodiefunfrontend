import React, { Component } from 'react';

export class AddNewForm extends Component {


  
  render() {
    return (
      <div>
        <form action="" style={formStyle}>
          <input type="text" name="user" style={inputStyle} />
          <input type="password" name="password" style={inputStyle} />
          <button style={buttonStyle}>Login</button>
        </form>
      </div>
    );
  }
}

export default AddNewForm;

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '20px'
};

const inputStyle = {
  margin: '8px',
  padding: '10px',
};

const buttonStyle ={
  padding:'10px',
  width: '300px',
  margin: 'auto'
}