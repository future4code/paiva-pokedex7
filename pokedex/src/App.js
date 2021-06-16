import { MainContainer } from "./styled"
import React from "react";
import Router from "./Router/Router"
import GlobalState from './global/GlobalState'

const App = () => {

  return (
    <GlobalState>
      <Router />
    </GlobalState>

  )
}

export default App;