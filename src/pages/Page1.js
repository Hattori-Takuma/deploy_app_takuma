import React, { useReducer } from 'react'
import reducer from '../reducers/index'




const initialCount = {
  count: 0
};

const Page1 = () => {



  const Hello = () => {
    console.log('Hello world');
  }

  const clickMe = () => {
    window.alert('Hello world')
  }


  const [state, dispatch] = useReducer(reducer, initialCount);
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








    </div>

  )
}



export default Page1

