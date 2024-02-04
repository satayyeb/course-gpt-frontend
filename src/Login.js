import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const username = formData.username;
    const password = formData.password;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let bodyFormData = new FormData();
        bodyFormData.append("username", username);
        bodyFormData.append("password", password);
        axios({
            method: "post",
            url: `${process.env.REACT_APP_BACKEND_URL}/login/`,
            data: bodyFormData,
            headers: {"Content-Type": "multipart/form-data"},
        })
            .then(function (response) {
                //handle success
                console.log("success");
                window.location.assign("/");
            })
            .catch(function (response) {
                //handle error
                alert("username or password is incorrect.");
            });
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: 400,
                    padding: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit} style={{width: "100%"}}>
                    <TextField
                        label="Username"
                        name="username"
                        variant="outlined"
                        margin="normal"
                        value={formData.username}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            style={{textDecoration: "none", fontWeight: "bold"}}
                        >
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
