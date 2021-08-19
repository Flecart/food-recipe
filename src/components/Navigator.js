import { Link } from "react-router-dom"
// TODO: style this component

function Navigator() {
    return(
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/History">History</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navigator;