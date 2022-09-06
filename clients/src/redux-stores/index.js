import _ from 'lodash';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
// reducers
import postReducer from './postsSlice/index.js';

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';

// And use redux-batched-subscribe as an example of adding enhancers
import { batchedSubscribe } from 'redux-batched-subscribe';

const reducer = {
  postReducer,
};

const debounceNotify = _.debounce(notify => notify());

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      .concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [batchedSubscribe(debounceNotify)],
});
