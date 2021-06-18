
import { useHistory } from 'react-router'
import { Head } from './styledComponents'
import { Button } from '@material-ui/core'
import { DonutLarge, Home } from '@material-ui/icons'

const Header = ({ name }) => {
    const history = useHistory()
  

    const toGoHome=()=>{
        history.push("/")
    }
    const toGo = () => {

        if (history.location.pathname === "/") {
            history.push("/pokedex")

        } else {
            history.push("/")
        }
    }
    const namePage = () => {
        if (history.location.pathname === "/") {
            return "Home"
        } else if (history.location.pathname === "/pokedex") {
            return "Pokedex"
        }}

    return (
     
            <Head>
                <div>
               {history.location.pathname === "/" ? <Button/>: <Button
               startIcon={<Home fontSize="larger" color="default"></Home>}
               onClick={toGoHome}               
               
               ></Button>}
           
               <h1>{namePage()} </h1> 
                 </div>        
                <Button 
                startIcon={<DonutLarge/>}variant="contained" color="primary"
                onClick={() => toGo()}> {history.location.pathname === "/" ? "Ver Pokedex" : "Ir para Home"}</Button >
                
                
            </Head>

            

       
    )
}
export default Header