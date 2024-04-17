// reducers/index.js
import { combineReducers } from 'redux';
import blogReducer from './reducer'; // Import your blogReducer here

const rootReducer = combineReducers({
  blog: blogReducer // Add more reducers here if needed
});

export default rootReducer;
