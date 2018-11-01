import React, { Component } from 'react';
import './App.css';
import UserPage from './modules/user/UserPage';
import { Provider } from 'react-redux';
import store from './configureStore';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <UserPage/>
        </div>
      </Provider>
    );
  }
}

export default App;
