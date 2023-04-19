import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className="card">
      <h1>Title</h1>
      <img src="./vite.svg" alt="" />

      <Square value="something">
        <div> hello there</div>
        <h5> this is title</h5>
      </Square>
      <Square value="Andrew" />
      <Square value="hello" />
      <Square value="5" />
    </div>
  );
}

export default App;
