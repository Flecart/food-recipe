import IntroText from "./IntroText";
import { Box, Grid, Fade } from "@material-ui/core";

export default function IntroTextBlock() {
    return(
        <Fade in timeout={2000}>
            <Box pt="35vh" mx="10vmin">
                <Grid container spacing={1}>
                    <Grid container item xs={12} sm={6}>
                        <IntroText/>
                    </Grid>
                </Grid>
            </Box>
        </Fade>
    );
}