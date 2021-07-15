import Cards from "../../Components/Cards";
import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'
import Header from "../../Components/Header";
import { AllCards } from "../../Components/styledComponents";
import Footer from "../../Components/Footer";
const Pokedex = () => {
    const { states } = useContext(GlobalStateContext)

    const pokeCard = states.pokedex && states.pokedex
        .map((pokemon) => (
            <div>

                <Cards
                    key={pokemon.id}
                    pokemon={pokemon}
                    name={pokemon.name}
                    id={pokemon.id}
                    sprites={pokemon.sprites}
                />
            </div>
        ));
    if (states.pokedex !== 0 && states.loading === false) {
        return (
            <div>
                <Header />
                <AllCards>
                    {states.pokedex.length > 0 ? pokeCard : <h2>A Pokedex está vazia!</h2> }
                </AllCards>
                <Footer />
            </div>
        )
    } else {
        return (
            <div>
                <Header />
                <AllCards>
                    <h1>Carregando...</h1>
                </AllCards>
                <Footer />
            </div>
        )
    }
};

export default Pokedex;