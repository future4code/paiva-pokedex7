import Header from "../Components/Header"
import { Error } from "./styledPages"

export const Erro = ()=>{
    return(
        <Error>
            <Header/>
        <h1>Erro 404 - Página não encontrada :(</h1>
        <img src="http://images.virgula.com.br/2020/08/pikachu-chorando.gif" alt="Pikachu chorando"/>
    </Error>
    )
}