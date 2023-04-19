import './styles.scss';
import Board from './components/Board';

function App() {
  return (
    <div className="card">
      <h1>Title</h1>
      <img src="./vite.svg" alt="" />

      <Board value="something">
        <div> hello there</div>
        <h5> this is title</h5>
      </Board>
    </div>
  );
}

export default App;
