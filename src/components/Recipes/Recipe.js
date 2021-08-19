import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import PropTypes from 'prop-types';

function Recipe(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState()
    const [cookies, setCookie] = useCookies(['cookie-name']);
    let currentPages = cookies['recipe']['meals']
    if (!currentPages) {
        setCookie("recipe", {meals:[{"idMeal": -1}]}, {path: '/'});
    }

    // UTILS
    function isIdInPage(recipeId) {
        if (recipeId >= currentPages.length) {
            return false;
        } 
        return true;
    }

    function getId(){
        // Bug: string urls pass the filter, make sure to check for these
        // and if they are string redirect back
        return currentPages.length;
    }

    function isInPage(object) {
        let mealId = object['idMeal'];
        
        // Fix-me: its O(n), we could order props.currentPages for 
        // idMeal and then check time is kinda O(1)
        currentPages.forEach(element => {
            if (element['idMeal'] === mealId) {
                return true
            }
        });

        return false
    }

    async function apiCall() {
        let request, resObject;
        try {
            while (true) {
                request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                resObject = await request.json()
                
                if (!isInPage(resObject)) {
                    break;
                }
            }
            
        } catch (e) {
            // TODO: feedback to user
            console.log(e)
            return {
                "errorMessage": `Error: ${e}`,
                "isError": true
            }
        }
        return resObject;
    };

    async function getMeal() {
        try {
            let recipeId = getId();
            if (isIdInPage(recipeId)) {
                console.log(currentPages)
                setData(currentPages[recipeId])
                return;
            }
            let response = await apiCall();
            if (!response.isError)
            {
                let newCurrentPages = currentPages;
                newCurrentPages.push(response);
                console.log(newCurrentPages)
                setCookie("recipe", {meals:newCurrentPages}, {path: '/'});
                setData(response['meals'][0])
            }
        } catch(e) {
            console.log(e)
        }
    }
    // END UTILS

    useEffect(() => {
        props.showNav(true);
        getMeal();
    }, [])

    useEffect(() => {
        setLoading(false)
        console.log(data);
    }, [data])

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