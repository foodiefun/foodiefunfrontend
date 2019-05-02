import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import AddNew from './components/AddNew';
import Nav from './components/Nav';
import NavBottom from './components/NavBottom';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App" style={AppStyle}>
    <Nav/>
      <Router>
        <Route exact path="/" component={Login} />
        {/* <Login /> */}
       
        <Route exact path="/edit" component={Edit} /> 
        <Route exact path='/home' component={Main}/>
        {/* <Main /> */}
        <Route exact path="/add-new" component={AddNew} />
        {/* <AddNew /> */}
      </Router>
      <NavBottom/>
    </div>
  );
}

export default App;

const AppStyle = {
  margin: 'auto',
  padding: '0px',
  textAlign: 'center'
};
