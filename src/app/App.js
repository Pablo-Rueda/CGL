import './styles/main.css';
import GameContextProvider from "./context/GameContext";

import Layout from "./components/layout/layout"
import Game from "./components/game/game";

function App() {

  return (
    <div className="app">
      <GameContextProvider>
        <Layout>
          <Game />
        </Layout>
      </GameContextProvider>   
    </div>
  );
}

export default App;
