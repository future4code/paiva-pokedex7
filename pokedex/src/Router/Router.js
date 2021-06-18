import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import PokeDetail from "../pages/PokeDetail/PokeDetail";
import Pokedex from "../pages/Pokedex/Pokedex"
import { Erro } from "../pages/Erro";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/pokedex"}>
                    <Pokedex />
                </Route>
                <Route exact path={"/poke-detail/:name"}>
                    <PokeDetail />
                </Route>
                <Route>
                   <Erro/>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default Router;