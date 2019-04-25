import React from 'react';
import './App.css';

import Login from './components/Login';
import Main from './components/Main';
import AddNew from './components/AddNew';

function App() {
  return (
    <div className="App" style={AppStyle}>
      <Login />
      <Main />
      <AddNew />
    </div>
  );
}

export default App;

const AppStyle={
  margin:'auto',
  textAlign:'center',
}