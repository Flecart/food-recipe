import { createTheme } from "@material-ui/core";

export const MainTheme = createTheme({
    typography: {
        h3: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:960px)': {
                fontSize: '3rem',
            },
        },
    },
});

// todo maike everything bigger