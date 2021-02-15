import React, { useState } from "react";
// importando Styles
import "./styles/app.scss";
// Importando componentes
import Player from "./components/Player";
import Musica from "./components/Musica";
//Import Api
import data from "./api";

function App() {
  //State
  const [musicas, setMusicas] = useState(data());
  const [musicaAtual, setMusicaAtual] = useState(musicas[2]);
  const [estaTocando, setEstaTocando] = useState(false);
  return (
    <div className="App">
      <Musica musicaAtual={musicaAtual} />
      <Player setEstaTocando={setEstaTocando} estaTocando={estaTocando} musicaAtual={musicaAtual} />
    </div>
  );
}

export default App;
