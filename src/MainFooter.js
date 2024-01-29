import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                gpt.alitayyeb.ir
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function MainFooter() {
    return (
        <>
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    CourseGPT
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    All rights reserved.
                </Typography>
                <Copyright/>
            </Box>
        </>
    )
}

export default MainFooter