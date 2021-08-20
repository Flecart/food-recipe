import { Typography, ThemeProvider, Button } from "@material-ui/core";
import { MainTheme } from "../styles/MainTheme";
import { Link } from "react-router-dom";

function IntroText(props) {
    return( 
        <ThemeProvider theme={MainTheme}>
            <Typography align="left" variant="h3" gutterBottom>
                Receipt Generator
            </Typography>

            <Typography align="left" display="block" gutterBottom>
                Have you ever wondered where can you get ideas for food receipts from all over the world? Now you can with Receipt Generator!
                {/* TODO: add more text or make it bigger */}
            </Typography>

            <Link to="recipe/new">
                <Button variant="contained" color="primary">
                    Get Receipt
                </Button>
            </Link>
        </ThemeProvider>
    );
}


export default IntroText;

