import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Router/coordinator";
import Card from '../../components/Cards'
import { GlobalStateContext } from '../global/GlobalStateContext'
import { useContext } from 'react'



const HomePage = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const history = useHistory();

    useEffect(() => {
        requests.getAllPokemons();
    }, [requests])

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => goToPokedex(history)}>Para pokedex</button>
            <Card/>
        </div>

    )
}

export default HomePage;