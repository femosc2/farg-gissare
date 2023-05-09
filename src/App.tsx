import "./App.css";

import React from "react";

import Game from "./components/Game";
import { getRandomStatementsList } from "./helpers/quizGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game statements={getRandomStatementsList()} />
      </header>
    </div>
  );
}

export default App;
