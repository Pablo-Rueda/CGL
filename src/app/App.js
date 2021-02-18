import './styles/main.css';
import BoardContextProvider from "./context/BoardContext";

import Layout from "./components/layout/layout"
import Game from "./components/game/game";

function App() {

  return (
    <div className="app">
      <BoardContextProvider>
        <Layout>
          <Game />
        </Layout>
      </BoardContextProvider>   
    </div>
  );
}

export default App;
