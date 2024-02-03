import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Logout() {
    const [done, setDone] = useState(false)
    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`)
            .then(() => {
                window.location.assign('/')
            })
    }, [])
    return (
        <div style={{textAlign: "center"}}>
            <h1>Logging out...</h1>
            <Link to="/">Back to home</Link>
        </div>
    );
}