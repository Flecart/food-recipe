import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import History from "./components/Receipts/History";
import Receipt from "./components/Receipts/Receipt";
import Navigator from "./components/Navigator";
import NotFound from "./components/NotFound";

function App() {
    const [showNav, setShowNav] = useState(false);

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

                    <Route exact path="/receipt/:id">
                        <Receipt showNav={setShowNav}/>
                    </Route>
                    <Redirect from="/receipt" to="/not-found"/>

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
