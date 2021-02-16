import './styles/main.css';
import BoardContextProvider from "./context/BoardContext"
import Game from "./components/game/game"

function App() {

  return (
    <div className="app">
      <BoardContextProvider>
        <Game />
      </BoardContextProvider>   
    </div>
  );
}

export default App;
