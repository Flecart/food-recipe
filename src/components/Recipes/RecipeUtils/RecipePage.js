import { Typography, Container, Box, Divider, Button, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import RecipeTable from "./PageComponents/RecipeTable";
import PropTypes from "prop-types"

import ScrollTop from "./PageComponents/ScroolTop";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Youtube from "./PageComponents/Youtube";

const useImageStyle = makeStyles({
    image: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "1px",
        boxShadow: "0px 0px 0px 2px rgba(127,0,0,0.2)",
    },
    icon: {
        zIndex: 10,

        backgroundColor: "#63371e",
        color: "#11ff11",
    },
    button: {
        backgroundColor: "#63371e",
        color: "#DDDDDD",
        '&:hover': {
            backgroundColor: '#52260f',
            color: "#CCCCCC"
        },
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
    const classes = useImageStyle();

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

    return (
        <Container>
            <Fade in timeout={2000}>
                <Box pt="15vh" pb="5vh" mx="10vw" id="top-appbar">
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
            </Fade>

            <Divider/>

            <Fade in timeout={4000}>
                <Thumbnail src={data["strMealThumb"]} title={data['strMeal']}/>
            </Fade>

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
                        <Youtube strYoutube={data['strYoutube']}/>
                    </Box>
                </Box>
                :
                ""
            }
            <Box mx="10vw" mb="5vh" pb="5vh">
                <Button fullWidth href={process.env.PUBLIC_URL + "/recipe/new"} className={classes.button}> Generate Recipe </Button>
            </Box>

            <ScrollTop {...props}>
                <Fab color="inherit" size="small" aria-label="scroll back to top" className={classes.icon}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Container>
    )
}

RecipePage.propTypes = {
    // I should copy the structure of the API call but... naaa
    data: PropTypes.any.isRequired
}

export default RecipePage;
