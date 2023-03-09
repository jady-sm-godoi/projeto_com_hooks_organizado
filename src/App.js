import { useEffect, useRef, useState } from 'react';
import './App.css';
// import { Div } from './components/DIV';
import { AppContext } from './contexts/AppContext';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <AppContext>
      <div>
        <h1>contador: {counter}</h1>
        <h1>delay: {delay}</h1>
        <button onClick={() => setDelay((d) => d + incrementor)}>
          + {incrementor}
        </button>
        <button onClick={() => setDelay((d) => d - incrementor)}>
          - {incrementor}
        </button>
        <input
          type="number"
          value={incrementor}
          onChange={(e) => setIncrementor(Number(e.target.value))}
        />
      </div>
      {/* <Div /> */}
    </AppContext>
  );
}

export default App;
