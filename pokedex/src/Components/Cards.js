import { useHistory } from 'react-router-dom'
import { Card } from './styledComponents'
import React from 'react'
import GlobalStateContext from '../global/GlobalStateContext'
import { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { Visibility, Delete, AddCircle } from '@material-ui/icons'

const Cards = ({ pokemon, name, id, sprites }) => {
    const history = useHistory()
    const { requests } = useContext(GlobalStateContext)

    const mover = () => {

        if (history.location.pathname === "/pokedex") {
            requests.removeFromPokedex(pokemon)


        } else {

            requests.addToPokedex(pokemon)
        }
    }

    const verDet = (name) => {
        history.push(`/poke-detail/${name}`)

    }

    const nameCap = name.replace(/^\w/, (c) =>
        c.toUpperCase()
    );

    return (

        <Card>
            <h2>#{id}</h2>
            <img src={sprites?.front_default} alt='foto do pokemon' />
            <h1>{nameCap}</h1>


            <div>
                <Button
                    variant="contained"
                    color={history.location.pathname === "/pokedex" ? "secondary" : "primary"}
                    startIcon={history.location.pathname === "/pokedex" ? <Delete /> : <AddCircle />}

                    onClick={() => mover()}> {history.location.pathname === "/pokedex" ? "Remover" : "Adicionar"}</Button >

                <Button startIcon={<Visibility />} variant="contained" color="default"
                    onClick={() => verDet(name)}>DETALHES</Button>
            </div>

        </Card>

    )
}
export default Cards;