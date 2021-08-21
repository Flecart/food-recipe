import { Box } from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/core/styles';
import image from "../Images/IntroScreenImage.jpg";
import lozad from "lozad";

const ImageBox = styled(Box)({
    height: "100vh",
    width: "100vw",
    padding: 0,
    margin: 0,

    // Background
    position: "fixed",
    zIndex: -1,
})

const useImageStyle = makeStyles({
    image: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    }
})

export default function IntroImage() {
    const classes = useImageStyle();
    const observer = lozad(); 
    observer.observe();
    return(
        <ImageBox>
            <img src={ image } data-placeholder-background="#63371e" className={`${classes.image} lozad`} alt="Intro Screen"/>
        </ImageBox>
    );
}
