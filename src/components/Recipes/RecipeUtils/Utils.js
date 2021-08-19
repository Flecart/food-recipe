import PropTypes from 'prop-types';


// Oh monkey keep things organized with this!
function Utils(props) {


    function isIdInPage(recipeId) {
        if (recipeId >= props.currentPages.length) {
            return false;
        } 
        return true;
    }

    function isInPage(object) {
        let mealId = object["meals"]['idMeal'];
        
        // Fix: its O(n), we could order props.currentPages for 
        // idMeal and then check time is kinda O(1)
        props.currentPages.forEach(element => {
            if (element['meals']['idMeal'] == mealId) {
                return true
            }
        });

        return false
    }

    async function apiCall() {
        try {
            let request, resObject;
            while (true) {
                request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                resObject = await request.json()
                
                if (!isInPage(resObject)) {
                    break;
                }
            }
            return resObject;
        } catch (e) {
            // TODO: feedback to user
            console.log(e)
            return {
                "message": `Error: ${e}` 
            }
        }
    };

    async function getMeal(recipeId) {
        if (isIdInPage(recipeId)) {
            return props.currentPages[recipeId];
        }
        let response = await apiCall();
        console.log(response);
        props.setCurrentPages(props.currentPages.push(response))
        return response
    }


    return
}


// This function is useful to pass down the api call and keep things organized
Utils.propTypes = {
    setCurrentPages: PropTypes.func.isRequired,
    currentPages: PropTypes.arrayOf(PropTypes.shape({
        // Too lazy to type check here... but i should..
        meals: PropTypes.any.isRequired 
    }))
};


export default Utils;


// import PropTypes from 'prop-types';

// // Oh monkey keep things organized with this!
// class Utils {

//     constructor(object) {
//         this.currentPages = object.currentPages;
//         this.setCurrentPages = object.setCurrentPages;
//         this.location = object.location;
//     }

//     isIdInPage(recipeId) {
//         if (recipeId >= this.currentPages.length) {
//             return false;
//         } 
//         return true;
//     }

//     getId() {
//         return this.location.split("/")[2];
//     }

//     async apiCall() {
//         let resObject;
//         try {
//             let request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//             resObject = await request.json()
//         } catch (e) {
//             // TODO: feedback to user
//             console.log(e)
//             return {
//                 "message": `${e}`,
//             }
//         }
//         console.log(resObject)
//         return resObject;
//     };

    
// }


// // This is useful to pass down the api call and keep things organized
// Utils.propTypes = {
//     setCurrentPages: PropTypes.func.isRequired,
//     currentPages: PropTypes.arrayOf(PropTypes.shape({
//         // Too lazy to type check here... but i should..
//         meals: PropTypes.any.isRequired 
//     }))
// };

// export default Utils;