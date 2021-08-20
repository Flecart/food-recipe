import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

import IntroScreen from "./components/IntroScreen/IntroScreen";
import History from "./components/Recipes/History";
import Recipe from "./components/Recipes/Recipe";
import Navigator from "./components/Navigator";
import NotFound from "./components/NotFound";

function App() {
    const [showNav, setShowNav] = useState(false);

    return(
        <Router>
            <div> 
                {showNav ? <Navigator/> : ""}
                <Switch>
                    <Route exact path="/">
                        <IntroScreen showNav={setShowNav}/>
                    </Route>

                    <Route exact path="/recipe/new">
                        <Recipe showNav={setShowNav}/>
                    </Route>

                    <Route path="/not-found">
                        <NotFound showNav={setShowNav}/>
                    </Route>

                    <Route path="*">
                        <Redirect push to="/not-found"/>
                    </Route>
                </Switch>
            </div>        
        </Router>
    );

}

export default App;
