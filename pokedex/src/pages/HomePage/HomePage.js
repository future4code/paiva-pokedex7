import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Router/coordinator";
import Cards from '../../Components/Cards'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'



const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const history = useHistory();

    const pokeCard = states.pokemons && states.pokemons
    .filter((pokemon) => {
            return !states.pokedex?.some((register) => register.id === pokemon.id)
        })
        .map((pokemon) => (
            <Cards 
            key={pokemon.id}
            pokemon={pokemon}
            name={pokemon.name}
            id={pokemon.id}
            sprites={pokemon.sprites}
            />

        ));



return (
    <div>
        <h1>Home page</h1>
        {pokeCard}
        <button onClick={() => goToPokedex(history)}>Para pokedex</button>
    </div>

)
}

export default HomePage;