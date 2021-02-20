import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ libraryStatus, setlibraryStatus }) => {
    return (
        <nav className="nav">
            <h1>Opus</h1>
            <button onClick={() => setlibraryStatus(!libraryStatus)}>Musicas<FontAwesomeIcon icon={faMusic} /></button>
        </nav>
    )
};

export default Nav;