import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import FeaturePage from "./FeaturePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/feature/:id">
                    <FeaturePage />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
