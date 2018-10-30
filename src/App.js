import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPage from './modules/user/UserPage';
import Loading from './modules/user/components/Loading';


class App extends Component {
  render() {
    return (
      <div className="App">
          <UserPage/>
      </div>
    );
  }
}

export default App;
