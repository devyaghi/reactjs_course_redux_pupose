import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterTest from "./CounterTest";
import {Provider} from 'react-redux';
import store from "./store";
import CounterShow from "./CounterShow";

function App() {
  return (
    <Provider store={store}>
      <CounterTest/>
      <CounterShow/>
    </Provider>


  );
}

export default App;
