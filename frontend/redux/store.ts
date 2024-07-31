import  {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { apiSlice } from './apiSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig={
  key:"root",
  version: 1,
  storage
}
const reducer=combineReducers({
  "user": userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
})
const persistedReducer=persistReducer(persistConfig, reducer)
export const store= configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false
        }).concat(apiSlice.middleware)
     
  
})

// export const store=configureStore({
//    reducer:{
//     "user": userReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer
//    },
//    middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false
//     }).concat(apiSlice.middleware)

//   })
