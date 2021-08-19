import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import IntroScreen from "./components/IntroScreen/IntroScreen";
import History from "./components/Recipes/History";
import Recipe from "./components/Recipes/Recipe";
import Navigator from "./components/Navigator";
import NotFound from "./components/NotFound";

function App() {
    const [showNav, setShowNav] = useState(false);

    const [cookies, setCookie] = useCookies(['recipe']);

    useEffect(() => {
        if (!cookies["recipe"]) {
            setCookie("recipe", {meals:[{"idMeal": -1}]}, {path: '/'});

        }
    }, [])
    // ID correspond to the location of the object here.
    const [currentPages, setCurrentPages] = useState([
        {
            meals: [
                {
                    "idMeal": -1
                }
            ]
        },
    ]);
    return(
        <Router>
            <div> 
                {showNav ? <Navigator/> : ""}
                <Switch>
                    {/* I want to redirect for nicer links 😊 */}
                    <Route exact path="/">
                        <IntroScreen showNav={setShowNav}/>
                    </Route>

                    <Route exact path="/history">
                        <History showNav={setShowNav}/>
                    </Route>
                    <Redirect from="/history" to="/not-found"/>

                    <Route exact path="/recipe/:id">
                        <Recipe 
                            currentPages={currentPages} 
                            setCurrentPages={setCurrentPages} 
                            showNav={setShowNav}
                        />
                    </Route>
                    <Redirect from="/recipe" to="/not-found"/>

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
