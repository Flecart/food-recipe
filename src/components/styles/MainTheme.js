import { createTheme } from "@material-ui/core";

// I only used this in the typography on the main page
// i Know that in bigger projects its easier to use themes like this
// but for this one it was just easier to apply theme directly in component
// files.


export const MainTheme = createTheme({
    typography: {
        h3: {
            fontSize: '2rem',
            color: "#FFFFFF",
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:960px)': {
                fontSize: '3rem',
            },
        },
        body1: {
            color: "#DDDDDD"
        }
    }
});