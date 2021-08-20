import { Box, Grid, Fade } from "@material-ui/core";
import { Typography, ThemeProvider, Button } from "@material-ui/core";
import { MainTheme } from "../styles/MainTheme";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        backgroundColor: "#A7D930",
        textDeration: "none",
        color: "#000000"
    }
})

function IntroText() {
    return( 
        <ThemeProvider theme={MainTheme}>
            <Typography align="left" variant="h3" gutterBottom>
                Recipe Generator
            </Typography>

            <Typography align="left" variant="body1" display="block" paraghraph gutterBottom>
                Have you ever wondered where can you get ideas for food receipts from all over the world? Now you can with Receipt Generator!
            </Typography>

            <Typography align="left" variant="body1" display="block" paraghraph gutterBottom>
                Try your luck with thousands of possible recipes!
            </Typography>
        </ThemeProvider>
    );
}

export default function IntroTextBlock() {
    const classes = useStyles();

    return(
        <Box pt="35vh" mx="10vmin">
            <Grid container spacing={1}>
                <Grid container item xs={12} sm={6}>
                    <IntroText/>
                    
                </Grid>
            </Grid>
            <Box pt="4vh">
            <Button href={process.env.PUBLIC_URL + "/recipe/new"} variant="contained" className={classes.button}>
                Get Receipt
            </Button>
            </Box>
        </Box>
    );
}
