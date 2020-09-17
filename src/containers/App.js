import React, { Component } from "react";
import "./App.css";
import { createStore} from 'redux';
import rootReducer from './rootReducers'
import  {Provider} from 'react-redux';
import Toggle from './Toggle';
const hello = () =>  ('hello');
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <div className = 'App'>
      <Toggle />  
    </div> 
  </Provider>
);




export default App;



// const defaultState = {
//   welcome: 'Hi',
//   otherState: 'some stuff'
// }
// const greeting = (state = defaultState, action) => {
//   switch(action.type) {
//     case 'GREET_ME':
//       return {...state, welcome: action.result};
//     case 'GREET_WORLD':
//       return {...state, welcome: 'Hello World'};
//     default:
//       return state
//   }
// };


// const store =  createStore(greeting);




// const result = 'something coming back from API'
// store.dispatch({
//   type: 'GREET_ME',
//   result
// })


// console.log(store.getState());