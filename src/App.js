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
    animationPercetage: 0,
  });
  const [libraryStatus, setlibraryStatus] = useState(false)
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculara a Porcetagem
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setMusicaInfo({ ...infoMusica, currentTime: current, duration, animationPercetage: animation })
  };
  const songEndHandler = async () => {
    let currentIndex = musicas.findIndex((musica) => musica.id === musicaAtual.id);
    await setMusicaAtual(musicas[(currentIndex + 1) % musicas.length]);
    if (estaTocando) audioRef.current.play();
  }
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus} />
      <Musica musicaAtual={musicaAtual} />
      <Player setMusicas={setMusicas} setMusicaAtual={setMusicaAtual} musicas={musicas} audioRef={audioRef} setEstaTocando={setEstaTocando} estaTocando={estaTocando} musicaAtual={musicaAtual} infoMusica={infoMusica} setMusicaInfo={setMusicaInfo} estaTocando={estaTocando} />
      <Biblioteca libraryStatus={libraryStatus} audioRef={audioRef} musicas={musicas} setMusicaAtual={setMusicaAtual} estaTocando={estaTocando} setMusicas={setMusicas} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={musicaAtual.audio} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
