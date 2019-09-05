import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Count: {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> You are logged in </h3> : <h3> You are logged out</h3>}
    </div>
  );
}

export default App;
