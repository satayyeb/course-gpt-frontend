import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 15,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        fontFamily="sans-serif"
                        component="h1"
                        variant="h2"
                        fontSize="80px"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        CourseGPT
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        A powerful and smart online course generator 😎
                    </Typography>
                    <Stack
                        sx={{pt: 4}}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button component={Link} to="/courses" size="large" variant="contained">Explore courses</Button>
                        <Button component={Link} to="#" size="large" variant="contained" title="Comming soon" disabled>Make
                            your Course</Button>

                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default Home;
