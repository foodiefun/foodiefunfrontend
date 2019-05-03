import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import AddNew from './components/AddNew';
import Nav from './components/Nav';
import NavBottom from './components/NavBottom';
import Edit from './components/Edit';
import Register from './components/Register'


function App() {
  return (
    <Router>
      <div className="App" style={AppStyle}>
        <Nav />

        <Route exact path="/login" render={(props)=>(
          <Login {...props} />
        )} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Main} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/add-new" component={AddNew} />
        <Route
          exact
          path={['/', '/edit', '/add-new']}
          component={NavBottom}
        />
      </div>
    </Router>
  );
}

export default App;

const AppStyle = {
  margin: 'auto',
  padding: '0px',
  textAlign: 'center'
};
