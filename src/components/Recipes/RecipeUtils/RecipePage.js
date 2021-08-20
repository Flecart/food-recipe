import { Typography, Container, Box, Divider, Button } from "@material-ui/core";
import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import RecipeTable from "./PageComponents/RecipeTable";
import { makeStyles } from '@material-ui/core/styles';

const useImageStyle = makeStyles({
    image: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "1px",
        boxShadow: "0px 0px 0px 2px rgba(127,0,0,0.2)",
    }
})

function Thumbnail({src, title}) {
    const classes = useImageStyle();

    let isValidSource = src !== null && src !== "";
    return(
        <Box width="50%" minWidth="400px" mx="10vw" my="5vh">
            { isValidSource ? <img src={src} className={classes.image} alt={title}/> : "" }
        </Box>
    );
}

function Instructions({instructions}) {
    // matches \r\n, \r, \n
    instructions = instructions.replace(/\r?\n|\n/g, 'LINEBREAK');
    let broken = instructions.split("LINEBREAK")
    return (
        <Typography component={'span'} variant="body1" paragraph gutterBottom>
          {broken.map(listitem => (
            <div key={listitem}>
              {listitem}
              <br/>
            </div>
          ))}
        </Typography>
    )
}

function RecipePage(props) {
    const data = props.data;
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // TODO: fix data hook warning
        function populateRows() {
            let tmpRows = [];
            for(let i = 1; i <= 20; i++) {
                const ingredient = data[`strIngredient${i}`];
                const quantity = data[`strMeasure${i}`];
                
                if (ingredient === null || ingredient === "") {
                    continue;
                }
                tmpRows.push({key: i, ingredient: ingredient, quantity: quantity})
            }
            setRows(tmpRows);
        }    
        populateRows()
    }, [])

    

    // custom functions for youtube iframe

    function getEmbeedUrl(ytURL) {
        let index = ytURL.indexOf("watch?v=");
        let embeedBase = "https://www.youtube.com/embed/"
        return embeedBase + ytURL.substring(index + "watch?v=".length, ytURL.length);
    }
    
    function getIframeWidth() {
        let max = 800;
        let calculatedValue = window.innerWidth / 2
        return calculatedValue > max ? max : calculatedValue;
    }
    
    function getIframeHeight() {
        let width = getIframeWidth()
        return width / 560 * 315;
    }

    window.addEventListener('resize', () => {
        const iframe = document.querySelector("#iframe");
        let width = getIframeWidth()
        let height = getIframeHeight()
        iframe.width = `${width}px`;
        iframe.height = `${height}px`;
    })

    return (
        <Container>
            <Box pt="15vh" pb="5vh" mx="10vw">
                <Typography variant="h3" gutterBottom>
                    {data['strMeal']}
                </Typography>

                <Typography gutterBottom>
                    Area: {data['strArea'] ? data['strArea'] : "Not Available"}
                </Typography>

                <Typography gutterBottom>
                    Category: {data['strCategory'] ? data['strCategory'] : "Not Available"}
                </Typography>
            </Box>

            <Divider/>

            <Thumbnail src={data["strMealThumb"]} title={data['strMeal']}/>

            <Box mx="10vw" mb="5vh">
                <Box my="5vh">
                    <Typography variant="h5" gutterBottom>
                        List of the Ingredients
                    </Typography>
                </Box>
                <RecipeTable data={rows}/>
            </Box>

            <Divider/>

            <Box mx="10vw" mb="5vh">
                <Box my="5vh">
                    <Typography variant="h4" gutterBottom>
                        Process
                    </Typography>
                </Box>
                <Instructions instructions={data['strInstructions']}/>
            </Box>

            <Divider/>

            { data['strYoutube'] ?
                <Box mx="10vw" mb="5vh" pb="5vh">
                    <Box my="5vh">
                        <Typography variant="h4" gutterBottom>
                            See Tutorial
                        </Typography>
                        <iframe allowFullScreen={true} id="iframe" width={getIframeWidth()} height={getIframeHeight()} src={getEmbeedUrl(data['strYoutube'])} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </Box>
                </Box>
                :
                ""
            }
            <Box mx="10vw" mb="5vh" pb="5vh">
                <Button fullWidth href="/recipe/new" color="primary"> Generate Recipe </Button>
            </Box>
        </Container>
    )
}

RecipePage.propTypes = {
    // I should copy the structure of the API call but... naaa
    data: PropTypes.any.isRequired
}

export default RecipePage;
