import React, { useRef, useState } from "react";
// importando Styles
import "./styles/app.scss";
// Importando componentes
import Nav from "./components/Nav";
import Player from "./components/Player";
import Musica from "./components/Musica";
import Biblioteca from "./components/Biblioteca";

//Import Api
import data from "./api";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [musicas, setMusicas] = useState(data());
  const [musicaAtual, setMusicaAtual] = useState(musicas[2]);
  const [estaTocando, setEstaTocando] = useState(false);
  const [infoMusica, setMusicaInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setlibraryStatus] = useState(false)
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setMusicaInfo({ ...infoMusica, currentTime: current, duration })
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus} />
      <Musica musicaAtual={musicaAtual} />
      <Player audioRef={audioRef} setEstaTocando={setEstaTocando} estaTocando={estaTocando} musicaAtual={musicaAtual} infoMusica={infoMusica} setMusicaInfo={setMusicaInfo} estaTocando={estaTocando} />
      <Biblioteca libraryStatus={libraryStatus} audioRef={audioRef} musicas={musicas} setMusicaAtual={setMusicaAtual} estaTocando={estaTocando} setMusicas={setMusicas} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={musicaAtual.audio}></audio>
    </div>
  );
}

export default App;
