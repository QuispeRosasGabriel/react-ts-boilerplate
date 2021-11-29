import React, { Fragment } from 'react';
import Counter from './components/Counter';
import CounterBy from './components/CounterBy';
import CounterEffect from './components/CounterEffect';
import CounterWithCustomHook from './components/CounterWithCustomHook';
import CounterWithReducer from './components/CounterWithReducer';

function App() {
  return (
    <Fragment>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15}/>
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />      
      <hr />
      <CounterWithCustomHook />
      <hr />
      <CounterWithReducer />
    </Fragment>
  );
}

export default App;
