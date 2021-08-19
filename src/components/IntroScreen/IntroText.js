import { Typography, ThemeProvider, Button } from "@material-ui/core";
import { MainTheme } from "../styles/MainTheme";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function IntroText(props) {
    
    const [cookies, setCookie] = useCookies(['cookie-name']);
    let number = cookies['recipe']['meals'];
    if (!number) {
        setCookie("recipe", {meals:[{"idMeal": -1}]}, {path: '/'});
    }
    number = number.length;
    return( 
        <ThemeProvider theme={MainTheme}>
            <Typography align="left" variant="h3" gutterBottom>
                Receipt Generator
            </Typography>

            <Typography align="left" display="block" gutterBottom>
                Have you ever wondered where can you get ideas for food receipts from all over the world? Now you can with Receipt Generator!
                {/* TODO: add more text or make it bigger */}
            </Typography>

            <Link to={`recipe/${number}`}>
                <Button variant="contained" color="primary">
                    Get Receipt
                </Button>
            </Link>
        </ThemeProvider>
    );
}


export default IntroText;