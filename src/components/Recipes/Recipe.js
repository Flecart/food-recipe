import { useEffect } from "react"
import PropTypes from 'prop-types';
import { useLocation } from "react-router";
import Utils from "./RecipeUtils/Utils";

function Recipe(props) {
    const location = useLocation();
    const utils = new Utils({
        "setCurrentPages": props.setCurrentPages, 
        "currentPages": props.currentPages
    })
    console.log(utils)
    let recipeId;

    function getId() {
        return location.pathname.split("/")[2];
    }

    useEffect(() => {
        recipeId = getId(); 
        props.showNav(true);
        let response = utils.getMeal(recipeId)
        console.log(response)
    })


    return(
        <p>
            hello there
        </p>
    )
}

Recipe.propTypes = {
    showNav: PropTypes.func.isRequired,
    setCurrentPages: PropTypes.func.isRequired,
    currentPages: PropTypes.arrayOf(PropTypes.shape({
        // Too lazy to type check here... but i should..
        meals: PropTypes.any.isRequired 
    }))
};

export default Recipe;