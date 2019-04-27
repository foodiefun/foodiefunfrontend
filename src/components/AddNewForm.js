import React, { Component } from 'react';
import Select from 'react-select';


const restTypes = [
  {value: 'Vegetarian', label: 'Vegetarian'},
  {value: 'Fine Dining', label: 'Fine Dining'},
  {value: 'Asian', label: 'Asian'},
  {value: 'Bar-Tavern', label: 'Bar-Tavern'},
  {value: 'Italian-French', label: 'Italian-French'},
  {value: 'Other', label: 'Other'}
];

const price = [
  {value: '$', label: '$'},
  {value: '$$', label: '$$'},
  {value: '$$$', label: '$$$'},
  {value: '$$$$', label: '$$$$'},
  {value: '$$$$!', label: '$$$$!'}
];
const rating = [
  {value: '*', label: '*'},
  {value: '**', label: '**'},
  {value: '***', label: '***'},
  {value: '****', label: '****'},
  {value: '*****', label: '*****'}
]


export class AddNewForm extends Component {


  
  render() {
    return (
      <div>
        <form action="" style={formStyle}>
          <input type="text" name="Name" style={inputStyle} />
          <input type="text" name="Date" style={inputStyle} />
          <Select
            options={restTypes}
            placeholder='Restaurant Types'
          />
          <Select
            options={price}
            placeholder='Price'
          />
          <Select
            options={rating}
            placeholder='Rating'
          />
          <input type="text" name="Comment" style={inputStyle} />
          <input type="text" name="Info" style={inputStyle} />
          <button>Upload Photo!</button>
          <button style={buttonStyle}>Add New</button>
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