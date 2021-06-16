import { useHistory } from 'react-router-dom'
import { Cards } from '../pages/Pokedex/styled'
import { GlobalStateContext } from '../global/GlobalStateContext'
import React, { useContext } from 'react'

const Card = (props) => {
    const history = useHistory()
    const { requests } = useContext(GlobalStateContext)



    const mover = () => {

        if (history.location.pathname === "/pokedex") {
            //função de remover//
            console.log("removeu")

        } else {
            requests.addToPokedex();
            console.log("adcionou")
        }
    }

    const verDet = () => {
        history.push("/poke-detail")

    }

    return (
        <Cards>
            <img scr='{pikachu.sprites.front_default}' alt='foto do pokemon' />
            <div>
                <button onClick={() => mover()}> {history.location.pathname === "/pokedex" ? "Remover" : "Adcionar"}</button >
                <button onClick={verDet}>VER DET.</button>
            </div>
        </Cards>
    )
}
export default Card