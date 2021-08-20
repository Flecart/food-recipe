import { Typography, Container, Box, Divider } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';


function RecipeSkeleton() {
    return (
        <Container>
            <Box pt="15vh" pb="5vh" mx="10vw" id="top-appbar">
                <Typography variant="h3" gutterBottom>
                    <Skeleton animation="wave"/>
                </Typography>

                <Typography gutterBottom>
                    <Skeleton animation="wave"/>
                </Typography>

                <Typography gutterBottom>
                    <Skeleton animation="wave"/>
                </Typography>
            </Box>

            <Divider/>

            <Box width="50%" minWidth="400px" mx="10vw" my="5vh">
                <Skeleton variant="rect" width={400} height={400}/>  
            </Box> 

            <Box mx="10vw" mb="5vh">
                <Box my="5vh">
                    <Typography variant="h5" gutterBottom>
                        <Skeleton/>
                    </Typography>
                </Box>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </Box>
        </Container>
    )
}

export default RecipeSkeleton