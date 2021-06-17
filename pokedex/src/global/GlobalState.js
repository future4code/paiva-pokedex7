import React, { useEffect, useState } from "react"
import BASE_URL from "../parameters"
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const getAllPokemons = async (quantity, offset) => {
        try {
            const res = await axios
                .get(
                    `${BASE_URL}/?limit=${quantity}&offset=${offset}`
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

    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }, [pokedex])

    useEffect(() => {
        const pokedexData = localStorage.getItem('pokedex');
        if (pokedexData) {
            setPokedex(JSON.parse(pokedexData));
            setLoading(false);
        }
    }, [setPokedex])



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
        const pokeName = pokemon.name.replace(/^\w/, (c) =>
            c.toUpperCase()
        );
        const confirm = window.confirm(
            `Você deseja adicionar ${pokeName} a sua pokedex?`
        );
        if (confirm) {
            if (!pokemonRegistered(pokemon)) {
                setPokedex([...pokedex, pokemon]);
                toast.warn(`${pokeName} foi adicionado a sua pokedex!`,{
                    position: toast.POSITION.TOP_CENTER})
            } else {
                toast.error(`${pokeName} já está na pokedex!`)
            }
        }
    };

    const removeFromPokedex = (pokemon) => {
        const pokeName = pokemon.name.replace(/^\w/, (c) =>
            c.toUpperCase()
        );
        const confirm = window.confirm(
            `Você deseja remover ${pokeName} da sua pokedex?`
        );
        if (confirm) {
            const newPokedex = pokedex.filter((resgister) => resgister.id !== pokemon.id);
            setPokedex(newPokedex);
            toast.warn(`${pokeName} foi removido da sua pokedex`, {
                position: toast.POSITION.TOP_CENTER});
        }
    }

   

    const states = { pokemons, pokedex, loading, currentPage }
    const setters = { setPokemons, setPokedex, setLoading, setCurrentPage }
    const requests = { getAllPokemons, addToPokedex, removeFromPokedex, pokemonRegistered }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
            <ToastContainer
            position="top-right"/>
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;