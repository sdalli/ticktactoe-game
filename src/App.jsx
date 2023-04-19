import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';

function App() {
  const [counter, setCounter] = useState(1);

  const onBtnClick = () => {
    console.log('hello');
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}> Click Me Please</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
