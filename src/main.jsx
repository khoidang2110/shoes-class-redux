import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shoeReducer } from './components/redux/reducer/reducer.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));


// let rootReducer = combineReducers({
//   shoe: shoeReducer,
//   number: demoReduxReducer
// })
let store = createStore(shoeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

root.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
)
