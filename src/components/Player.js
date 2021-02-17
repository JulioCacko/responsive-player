import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from '@fortawesome/free-solid-svg-icons'


const Player = ({ musicas, musicaAtual, estaTocando, setEstaTocando, setMusicaInfo, infoMusica, audioRef, setMusicaAtual, setMusicas }) => {
    //useEffect
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = musicas.map((musica) => {
            if (musica.id === nextPrev.id) {
                return {
                    ...musica,
                    active: true,
                };
            } else {
                return {
                    ...musica,
                    active: false,
                };
            }
        });
        setMusicas(newSongs);
    };
    //Handlers
    const playSongHandler = () => {
        if (estaTocando) {
            audioRef.current.pause();
            setEstaTocando(!estaTocando);
        } else {
            audioRef.current.play();
            setEstaTocando(!estaTocando);
        }
    };

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setMusicaInfo({ ...infoMusica, currentTime: e.target.value });
    };
    const skipTrackHandler = async (direction) => {
        let currentIndex = musicas.findIndex((musica) => musica.id === musicaAtual.id);
        if (direction === 'skip-forward') {
            await setMusicaAtual(musicas[(currentIndex + 1) % musicas.length]);
            activeLibraryHandler(musicas[(currentIndex + 1) % musicas.length]);
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % musicas.length === -1) {
                await setMusicaAtual(musicas[musicas.length - 1]);
                activeLibraryHandler(musicas[musicas.length - 1]);
                //verifica se a musica está tocando
                if (estaTocando) audioRef.current.play();
                return;
            }
            await setMusicaAtual(musicas[(currentIndex - 1) % musicas.length]);
            activeLibraryHandler(musicas[(currentIndex - 1) % musicas.length]);
        }
        //verifica se a musica está tocando
        if (estaTocando) audioRef.current.play();
    };
    //Animation Styles
    const trackAnim = {
        transform: `translateX(${infoMusica.animationPercetage}%)`
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(infoMusica.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${musicaAtual.color[0]},${musicaAtual.color[1]})` }} className="track">
                    <input onChange={dragHandler} min={0} max={infoMusica.duration || 0} value={infoMusica.currentTime} type="range" />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{infoMusica.duration ? getTime(infoMusica.duration) : "Buffering"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={estaTocando ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
};

export default Player;