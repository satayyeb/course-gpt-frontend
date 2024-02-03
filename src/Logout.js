import {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Logout() {
    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`)
    }, [])
    return (
        <div style={{textAlign: "center"}}>
            <h1>You Logged out successfully.</h1>
            <Link to="/">Back to home</Link>
        </div>
    );
}