import { Typography, ThemeProvider, Button } from "@material-ui/core";
import { MainTheme } from "../styles/MainTheme";

export default function IntroText() {
    return( 
        <ThemeProvider theme={MainTheme}>
            <Typography align="left" variant="h3" gutterBottom>
                Receipt Generator
            </Typography>

            <Typography align="left" display="block" gutterBottom>
                Have you ever wondered where can you get ideas for food receipts from all over the world? Now you can with Receipt Generator!
                {/* TODO: add more text or make it bigger */}
            </Typography>

            <Button variant="contained" color="primary">
                Get Receipt
            </Button>
        </ThemeProvider>
    );
}