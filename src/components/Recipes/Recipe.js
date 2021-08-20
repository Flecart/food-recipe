import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

function Recipe(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState()

    useEffect(() => {
        props.showNav(true);
        getMeal();
    }, [])

    useEffect(() => {
        setLoading(false)
        console.log(data);
    }, [data])

    async function getMeal() {
        let request, response;
        try {
            request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            response = await request.json()
        } catch (e) {
            // TODO: feedback to user
            console.log(e)
            response = {
                "errorMessage": `Error: ${e}`,
                "isError": true
            }
        }

        setData(response['meals'][0])
    };

    return(
        <p>
            hello there
        </p>
    )
}

Recipe.propTypes = {
    showNav: PropTypes.func.isRequired
};

export default Recipe;