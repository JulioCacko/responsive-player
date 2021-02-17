import React from "react";



const BibliotecaMusicas = ({ musica, musicas, setMusicaAtual, id, audioRef, estaTocando, setMusicas }) => {
    const songSelectHandler = async () => {
        const selecionarMusica = musicas.filter((state) => state.id === id);
        setMusicaAtual(selecionarMusica[0]);
        // Adiciona Actve
        const newSongs = musicas.map((musica) => {
            if (musica.id === id) {
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
        //verifica se a musica está tocando
        if (estaTocando) audioRef.current.play();

    };
    return (
        <div onClick={songSelectHandler} className={`biblioteca-musica ${musica.active ? "selected" : ""}`}>
            <img src={musica.cover} alt={musica.name}></img>
            <div className="musica-description">
                <h3>{musica.name}</h3>
                <h4>{musica.artist}</h4>
            </div>
        </div>
    )
};

export default BibliotecaMusicas;