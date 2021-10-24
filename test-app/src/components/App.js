import React from "react";
import {Route, Switch} from "react-router-dom"
import Header from "./shared/Header";

import Week4Page from "./week4/Week4Page";
import Week5Page from "./week5/Week5Page";
import Week6Page from "./week6/Week6Page";


const App = () => {
    return (
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={Week4Page} />
            <Route path="/week5" component={Week5Page} />
            <Route path="/week6" component={Week6Page} />
        </Switch>
        
    </>
    );
};

export default App;
