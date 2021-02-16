import React from "react";
import BibliotecaMusicas from "./BibliotecaMusicas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Biblioteca = ({ musicas, setMusicaAtual, audioRef, estaTocando, setMusicas, libraryStatus }) => {
    return (
        <div className={`Biblioteca ${libraryStatus ? 'active-biblioteca' : ''}`}>
            <h2><FontAwesomeIcon className="music-icon" size="2x" icon={faMusic} />Musicas</h2>
            <div className="biblioteca-musicas">
                {musicas.map(musica => (
                    <BibliotecaMusicas musicas={musicas} musica={musica} setMusicaAtual={setMusicaAtual} id={musica.id} key={musica.id} audioRef={audioRef} estaTocando={estaTocando} setMusicas={setMusicas} />
                ))}
            </div>
        </div>
    );
}



export default Biblioteca;