
import { useHistory } from 'react-router-dom'
import { Cards } from '../pages/Pokedex/styled'
//import {GlobalState} from ''//

const Card = ()=>{
    const history = useHistory()

    const mover = () => {

        if (history.location.pathname === "/pokedex") {
            //função de remover//
            console.log("removeu")

        } else {
            //função de add//
            console.log("adcionou")
        }
    }

const verDet = ()=>{
    history.push("/poke-detail")
  
}

    return(
        <Cards>
            <img scr='{pikachu.sprites.front_default}' alt = 'foto do pokemon'/>
            <div>
            <button onClick={() => mover()}> {history.location.pathname === "/pokedex" ? "Remover" : "Adcionar"}</button >
            <button onClick={verDet}>VER DET.</button>
            </div>
        </Cards>
    )
}
export default Card