import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import FeaturePage from "./FeaturePage";
import Landing from "./Landing";
import Signup from "./Signup";

function App() {
    return (
        <Switch>
            <Route path="/feature/:id">
                <FeaturePage />
            </Route>
            <Route path="/home">
                <Homepage />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    );
}

export default App;
