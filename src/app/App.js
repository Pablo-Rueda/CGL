import './styles/main.css';
import GameContextProvider from "./context/GameContext";


import Layout from "./components/layout/layout";
import Instructions from "./components/instructions/instructions"

import Game from "./components/game/game";

function App() {

  return (
    <div className="app">
      <GameContextProvider>
        <Instructions />
        <Layout>
          <Game />
        </Layout>
      </GameContextProvider>   
    </div>
  );
}

export default App;
