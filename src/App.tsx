import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>
          Counter value: {count}
        </p>
      </header>
    </div>
  );
}

export default App;
