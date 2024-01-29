import {Link} from "react-router-dom";

const NoPage = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>404 Not found</h1>
            <p>
                The requested page does not exist.
            </p>
            <Link to="/">Back to home</Link>
        </div>
    );
};

export default NoPage;
