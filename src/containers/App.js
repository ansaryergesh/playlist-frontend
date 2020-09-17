import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Toggle from './Toggle';
import { ConfigureStore } from '../store/configureStore';


const store = ConfigureStore();
class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Toggle />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}
export default App;