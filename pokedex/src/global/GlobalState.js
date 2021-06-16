import React, { useEffect, useState } from "react"
import BASE_URL from "../parameters"
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const getAllPokemons = async (quantity, offset) => {
        try {
            const res = await axios
                .get(
                    BASE_URL`/pokemon/?limit=${quantity}&offset=${offset}`
                );

            const pokemonsRequest = res.data.results.map(async (res) => {
                const pokeList = await axios
                    .get(res.url);
                return pokeList;
            });

            let pokemonArray = await Promise.all(pokemonsRequest);
            pokemonArray = pokemonArray.map((pokemon) => pokemon.data);

            return pokemonArray;
        }

        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setLoading(true);
        const allPokemons = async () => {
            const res = await getAllPokemons(20, (currentPage * 20));
            setPokemons(res);
            setLoading(false);
        }
        allPokemons();
    }, [setPokemons, currentPage]);

    const changePage = (currentPage) => {
        setCurrentPage(currentPage - 1);
    }

    const pokemonRegistered = (pokemon) => {
        const index = pokedex.findIndex((index) => index.id === pokemon.id)
        if (index === -1) {
            return false;
        };

        return true;
    };

    const addToPokedex = (pokemon) => {
        const newPokemonsList = [...pokedex]
        const pokeName = pokemon.name.replace(/^\w/, (c) =>
            c.toUpperCase()
        );
        const confirm = window.confirm(
            `Você deseja adicionar ${pokeName} a sua pokedex?`
        );
        if (confirm) {
            if (!pokemonRegistered) {
                setPokedex([...pokedex, pokemon]);
                const index = pokemons.findIndex((item) => {
                    return item.name === pokemon.name
                })
                newPokemonsList.splice(index, 1)
                setPokemons(newPokemonsList)
                alert(`${pokeName} foi adicionado a sua pokedex!`)
            } else {
                alert(`${pokeName} já está na pokedex!`)
            }
        }
    }

    const states = { pokemons, pokedex, loading, currentPage }
    const setters = { setPokemons, setPokedex, setLoading, setCurrentPage }
    const requests = { getAllPokemons, addToPokedex }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>

    )


}

export default GlobalState;