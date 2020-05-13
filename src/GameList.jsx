import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'

const GameList = () => {

    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [rate, setRate] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://wild-games.herokuapp.com/api/v1')
                .then(response => setGames(response.data))
                .catch(err => { setIsError(!isError); setError(err.message) })
                .finally(() => setIsLoading(false))
        };
        fetchData()
    }, [])


    const deleteCard = id => {
        setGames(games.filter(game => game.id !== id))
    }

    return (
        <>
            <button onClick={() => setRate(!rate)}>
                {rate ? 'See the best games' : 'See all the games'}
            </button>
            {isLoading && 'Loading'}
            {isError && <p>Error system</p>}
            {rate ? games.map(e => { return <Game key={e.id} {...e} deleteCard={deleteCard} /> }) : games.filter(e => { return e.rating >= 4.5}).map(e => { return <Game key={e.id} {...e} deleteCard={deleteCard}  /> })   }

        </>
    )
}

export default GameList