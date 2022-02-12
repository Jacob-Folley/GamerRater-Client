import React, {useState, useEffect} from 'react';
import {getGames} from "./GameManager.js";
import {Link} from "react-router-dom"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <>
        <Link to={`/gameform`}>Register New Game</Link>

        <article className="games">
            {
                games.map((game) => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><Link to={`/games/${game.id}`}>{game.title}</Link></div>
                        </section>
                        
                })
            }
        </article>
        </>
    )
}

