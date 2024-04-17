// store.js
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './index.js'; // Assuming you have a root reducer

const store = createStore(rootReducer);

export default store;
