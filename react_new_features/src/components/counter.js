import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('this should only run once.');
  }, [])

  useEffect(() => {
    console.log('useEffect ran');
    document.title = count;
  }, [count])

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(props.count);
  }
  
  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
    </div>
  );
}

App.defaultProps = {
  count: 0
}

export default App;