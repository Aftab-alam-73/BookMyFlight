"use client"

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import React from 'react';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

type props={
    children:React.ReactNode
}
const ReduxProvider = ({ children }:props) => {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
   {children}
    </PersistGate>
  </Provider>;
};

export default ReduxProvider;
