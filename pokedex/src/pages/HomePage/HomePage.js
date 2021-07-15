import React from "react";
import Cards from '../../Components/Cards'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'
import Header from '../../Components/Header'
import { AllCards } from "../../Components/styledComponents";
import Footer from "../../Components/Footer";
import Pagination from "../../Components/Pagination";
import { Page } from "../styledPages";

const HomePage = () => {
    const { states, requests } = useContext(GlobalStateContext)


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

    if (states.pokemon !== 0 && states.loading === false) {
        return (
            <div>
                <Header />

                <AllCards>
                    {pokeCard}
                </AllCards >
                <Page>
                    <Pagination
                        currentPage={states.currentPage}
                        changePage={requests.changePage} />
                </Page>
                <Footer />

            </div>

        )
    } else {
        return (
            <div>
                <Header />
                <Page>
                    <h1>Carregando...</h1>
                    <Pagination
                        currentPage={states.currentPage}
                        changePage={requests.changePage} />
                </Page>
                <Footer />
            </div>
        )
    }
}

export default HomePage;