import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getGame } from "./GameManager.js";

export const GameDetails = () => {
    // Return ( TITLE, DESIGNER, YEAR RELEASED, NUMBER OF PLAYERS, ESTIMATED TIME TO PLAY, AGE RECOMMENDATION, CATEGORIES)
    const { gameId } = useParams()

    const [game, setGame] = useState([])

    useEffect(() => {
        getGame(gameId).then(data => setGame(data))
    }, [])

    return (
        <>
            <article className="gameInfo">

                <section className="gameDetails">
                    <h1>{game.title}</h1>
                    <p>Designer: {game.designer}</p>
                    <p>Year released: {game.year_released}</p>
                    <p>Number of Players: {game.num_of_players}</p>
                    <p>Estimated time to play: {game.estimated_time}</p>
                    <p>Age Reccomendation: {game.age}</p>
                    <p>Categories: {game.overall_rating}</p>
                </section>

                <button className="gameReviewButton" onClick={() => {history.pushState(`/game/${gameId}/review`)}}>Review</button>

            </article>
        </>
    )
}