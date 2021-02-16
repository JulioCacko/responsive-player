import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({ musicaAtual, estaTocando, setEstaTocando, setMusicaInfo, infoMusica, audioRef }) => {

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
    // State

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(infoMusica.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={infoMusica.duration || 0} value={infoMusica.currentTime} type="range" />
                <p>{getTime(infoMusica.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={estaTocando ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
};

export default Player;