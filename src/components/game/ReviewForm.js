import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { getCategories, getGames, createGame } from "./GameManager.js";

export const GameForm = () => {
    // Return ( TITLE, DESIGNER, YEAR RELEASED, NUMBER OF PLAYERS, ESTIMATED TIME TO PLAY, AGE RECOMMENDATION, CATEGORIES)
    const [games, setGames] = useState([])
    const [categories, setCategories] = useState([])

    const date = new Date();

    const history = useHistory()

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        designer: "",
        year_released: "",
        num_of_players: 0,
        estimated_time: 0,
        age: 0,
        overall_rating: 0,
        category: 0
    })

    const changeEventState = (domEvent) => {
        // TODO: Complete the onChange function
        const newEvent = Object.assign({}, currentGame) //create copy
        newEvent[domEvent.target.name] = domEvent.target.value //modify copy
        setCurrentGame(newEvent) //set copy as new state
    }


    return (
        <>
            <article className="reviewForm">

                <form className="reviewFormInfo">
                    <textarea></textarea>
                        
                    <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        review: currentGame.title,
                        description: currentGame.description,
                        designer: currentGame.designer,
                        num_of_players: parseInt(currentGame.num_of_players),
                        estimated_time: parseInt(currentGame.estimated_time),
                        age: parseInt(currentGame.age),
                        category: parseInt(currentGame.category),
                        overall_rating: 7,
                        year_released: date.getFullYear()
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>

            </article>
        </>
    )
}
