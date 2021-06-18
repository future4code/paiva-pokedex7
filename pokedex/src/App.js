
import React from "react";
import Router from "./Router/Router"
import GlobalState from './global/GlobalState'
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./styledApp";

const App = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <GlobalState>
                <Router />
            </GlobalState>
        </MuiThemeProvider>

    )
}

export default App;