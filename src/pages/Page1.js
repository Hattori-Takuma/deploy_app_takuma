import React, { useReducer, useState } from 'react'
import reducer from '../reducers/index'

const initialCount = {
  count: 0
};

const Page1 = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);
  const [change, setChange] = useState("");
  const [message, setMessage] = useState("");
  const [isOk, setIsOk] = useState(false);

  const [errorMessage,setErrorMessage] = useState('')
  const Hello = () => {
    console.log('Hello world');
  }
  const clickMe = () => {
    window.alert('Hello world')
  }
  const increment = () => {
    console.log('increment');
    dispatch({
      type: 'INCREMENT'
    });
  };
  const decrement = () => {
    console.log('decrement');
    dispatch({
      type: 'DECREMENT'
    });
  };
  const reset = () => {
    console.log('reset');
    dispatch({
      type: 'RESET'
    });
  };

  const handleClick = () => {
    if (change === "") {
      setIsOk(false)
      setErrorMessage("入力してください")
      setMessage(change)
    } else {
      setIsOk(true)
      setMessage(change)
      setErrorMessage('')
    }
  }
  console.log(change)
  return (
    <div>
      <div>Page1</div>
      <div>
        <h1>level 1</h1>
        <button onClick={Hello}>Hello World</button></div>

      <div>
        <h1>level 2</h1>
        <button onClick={clickMe}>Hello World2</button></div>
      <div>
        <h1>level 3</h1>
        <button onClick={increment}>ええやん</button>
        <button onClick={decrement}>よくないんちゃう</button>
        <button onClick={reset}>一旦リセットで</button>

        {state.count}
      </div>

      <div>
        <h1>level 4 , 5</h1>

        <input type="text" name="name" onChange={e => setChange(e.target.value)} />
        <button onClick={handleClick} >Hello</button>

        <div> {message}</div>
        <div style={{color: 'red'}}>{errorMessage}</div>
      </div>
    </div>

  )
}

export default Page1

