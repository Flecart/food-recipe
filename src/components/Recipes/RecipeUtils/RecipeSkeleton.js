import { Typography, Container, Box } from "@material-ui/core";



function RecipeSkeleton() {
    return (
        <Container>
            <Box pt="20vh">
                <Typography variant="h2">
                    Loading
                </Typography>
            </Box>
        </Container>
    )
}

export default RecipeSkeleton