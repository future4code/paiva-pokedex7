import { useHistory } from 'react-router-dom'
import { PokeCard } from '../pages/Pokedex/styled'
import React from 'react'
import GlobalStateContext from '../global/GlobalStateContext'
import { useContext } from 'react'

const Cards = ({ pokemon, name, id, sprites }) => {
    const history = useHistory()
    const { requests } = useContext(GlobalStateContext)

    const mover = () => {

        if (history.location.pathname === "/pokedex") {
            requests.removeFromPokedex(pokemon)
            console.log("removeu")

        } else {
            console.log("adicionou")
            requests.addToPokedex(pokemon)
        }
    }

    const verDet = (name) => {
        history.push(`/poke-detail/${name}`)

    }



    return (
        <PokeCard>
            <img src={sprites?.front_default} alt='foto do pokemon' />
            <h2>#{id}</h2>
            <h1>{name}</h1>
            <div>
                <button onClick={() => mover()}> {history.location.pathname === "/pokedex" ? "Remover" : "Adicionar"}</button >
                <button onClick={() => verDet(name)}>VER DET.</button>
            </div>
        </PokeCard>
    )
}
export default Cards;