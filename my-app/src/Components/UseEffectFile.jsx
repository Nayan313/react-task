import React, { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, forwardRef } from 'react';

const CountContext = React.createContext();

// Reducer function for useReducer
const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function HooksExample(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(''); 
  const [state, dispatch] = useReducer(countReducer, { count: 0 }); 
  const inputRef = useRef(null); 
  const [text, setText] = useState('Hello, World!'); 
  const memoizedValue = useMemo(() => text.toUpperCase(), [text]); 
  const memoizedCallback = useCallback(() => {
    console.log('Memoized callback triggered');
  }, []); 

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []); 
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">useState Example</h2>
      <p className="text-lg mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ease-in-out duration-300"
      >
        Increment
      </button>

      <h2 className="text-2xl font-bold mt-6 mb-4">useReducer Example</h2>
      <p className="text-lg mb-2">Count (reducer): {state.count}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition ease-in-out duration-300"
        >
          Increment (Reducer)
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition ease-in-out duration-300"
        >
          Decrement (Reducer)
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">useContext Example</h2>
      <CountContext.Provider value={count}>
        <ContextChild />
      </CountContext.Provider>

      <h2 className="text-2xl font-bold mt-6 mb-4">useRef Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me!"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h2 className="text-2xl font-bold mt-6 mb-4">useMemo Example</h2>
      <p className="text-lg mb-2">Text in uppercase: {memoizedValue}</p>
      <button
        onClick={() => setText(text === 'Hello, World!' ? 'React is awesome!' : 'Hello, World!')}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition ease-in-out duration-300"
      >
        Change Text
      </button>

      <h2 className="text-2xl font-bold mt-6 mb-4">useCallback Example</h2>
      <button
        onClick={memoizedCallback}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition ease-in-out duration-300"
      >
        Trigger Callback
      </button>
    </div>
  );
}

const ContextChild = () => {
  const countFromContext = useContext(CountContext);
  return <p className="text-lg mt-2">Count from Context: {countFromContext}</p>;
};

export default forwardRef(HooksExample);
