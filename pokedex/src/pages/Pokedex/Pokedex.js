import Cards from "../../Components/Cards";
import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'
import { useHistory } from "react-router";

const Pokedex = () => {
    const { states } = useContext(GlobalStateContext)
    const history = useHistory();

    const pokeCard = states.pokedex && states.pokedex
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
            <h1>Pokedex</h1>
            {pokeCard}
        </div>
    )
};

export default Pokedex;