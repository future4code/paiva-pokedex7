import React from "react";
import Cards from '../../Components/Cards'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'
import Header from '../../Components/Header'
import { AllCards } from "../../Components/styledComponents";
import Footer from "../../Components/Footer";

const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)


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
            <Header />

            <AllCards>
                {pokeCard}                           
            </AllCards >

            <Footer/>

        </div >

    )
}

export default HomePage;