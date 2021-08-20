import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import RecipeSkeleton from "./RecipeUtils/RecipeSkeleton";
import RecipePage from "./RecipeUtils/RecipePage";
import React from "react";

function Recipe(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState()
    props.showNav(true);

    useEffect(() => {
        async function getMeal() {
            let request, response;
            try {
                request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                response = await request.json()
            } catch (e) {
                // TODO: feedback to user
                response = {
                    "errorMessage": `Error: ${e}`,
                    "isError": true
                }
            }
            setData(response['meals'][0])
        };

        setLoading(true)
        getMeal();
    }, [])

    useEffect(() => {
        if (data !== undefined) {
            setLoading(false)
        console.log(data);

        }
    }, [data])

    

    return(
        <React.Fragment>
            {loading ? <RecipeSkeleton/> : <RecipePage data={data}/>}
        </React.Fragment>
    )
}

Recipe.propTypes = {
    showNav: PropTypes.func.isRequired
};

export default Recipe;