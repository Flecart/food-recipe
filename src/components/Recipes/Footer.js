import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
        height: "10vh",
        position: "absolute",
        padding: 0,
        color: "#DDDDDD",
        backgroundColor: "#63371e",
        boxShadow: "0px -5px 2px 4px #63371e",
    },
    a: {
        color: "#DDDDDD",
    }
}));


function Footer() {
    const classes = useStyles();

    return(
        <Container className={ classes.footer }>
            <Box mt="3vh">
                
                <Typography variant="h5" color="inherit" align="center">
                    2021 Recipe Generator <a className={classes.a} href="https://github.com/Flecart"><em>By Flecart</em></a>
                </Typography>
            </Box>
        </Container>
    )
}
export default Footer;