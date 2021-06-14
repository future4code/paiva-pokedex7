import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Router/coordinator";


const HomePage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => goToPokedex(history)}>Para pokedex</button>
        </div>

    )
}

export default HomePage;