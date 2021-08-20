import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

import IntroScreen from "./components/IntroScreen/IntroScreen";
import Recipe from "./components/Recipes/Recipe";
import Navigator from "./components/Navigator";
import NotFound from "./components/NotFound";

function App() {
    const [showNav, setShowNav] = useState(false);

    return(
        <Router basename={process.env.PUBLIC_URL}>
            <div> 
                {showNav ? <Navigator/> : ""}
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"}>
                        <IntroScreen showNav={setShowNav}/>
                    </Route>

                    <Route exact path={process.env.PUBLIC_URL + "/recipe/new"}>
                        <Recipe showNav={setShowNav}/>
                    </Route>

                    <Route path={process.env.PUBLIC_URL + "/not-found"}>
                        <NotFound showNav={setShowNav}/>
                    </Route>

                    <Route path={process.env.PUBLIC_URL}>
                        <Redirect push to={process.env.PUBLIC_URL + "/not-found"}/>
                    </Route>
                </Switch>
            </div>        
        </Router>
    );

}

export default App;
