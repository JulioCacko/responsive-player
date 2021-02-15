import React from "react";

const Musica = ({ musicaAtual }) => {
    return (
        <div className="musica-container">
            <img src={musicaAtual.cover} alt={musicaAtual.name}></img>
            <h2>{musicaAtual.name}</h2>
            <h3>{musicaAtual.artist}</h3>
        </div>
    )
};

export default Musica;