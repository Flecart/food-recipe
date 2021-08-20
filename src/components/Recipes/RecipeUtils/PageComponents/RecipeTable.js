import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import PropType from "prop-types";
// For the table

const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
});

function RecipeTable(props) {
    const classes = useStyles();

    return(
        <TableContainer component={Paper} my="5vh">
            <Table className={classes.table} size="medium" aria-label="table">
                <TableHead>
                <TableRow>
                    <TableCell><strong>Ingredient</strong></TableCell>
                    <TableCell align="right"><strong>Quantity</strong></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.data.map((row) => (
                    <TableRow key={row.key}>
                        <TableCell component="th" scope="row">
                            {row.ingredient}
                        </TableCell>
                        <TableCell align="right">{row.quantity ? row.quantity : "As you like"}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

RecipeTable.propType = {
    data: PropType.arrayOf(PropType.shape({
        key: PropType.number.isRequired,
        ingredient: PropType.string.isRequired,
        quantity: PropType.string.isRequired,
    })).isRequired
}

export default RecipeTable;

