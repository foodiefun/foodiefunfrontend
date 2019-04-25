import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import AddNew from './components/AddNew';

function App() {
  return (
    <div className="App" style={AppStyle}>
      <Router>
        <Route exact path="/" component={Login} />
        {/* <Login /> */}
        <Route exact path="/home" component={Main} />
        {/* <Main /> */}
        <Route exact path="/add-new" component={AddNew} />
        {/* <AddNew /> */}
      </Router>
    </div>
  );
}

export default App;

const AppStyle = {
  margin: 'auto',
  padding: '0px',
  textAlign: 'center'
};
