import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import FeaturePage from "./FeaturePage";
import Landing from "./Landing";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/feature/:id">
                    <FeaturePage />
                </Route>
                <Route path="/home">
                    <Homepage />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
