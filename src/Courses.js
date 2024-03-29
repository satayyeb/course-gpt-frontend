import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Dialog } from "@mui/material";
// import MainFooter from "./MainFooter";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import CoursePage from "./CoursePage";
import axios from "axios";

const MainFooter = React.lazy(() => import("./MainFooter.js"));
const CoursePage = React.lazy(() => import("./CoursePage.js"));

const defaultTheme = createTheme();

export default function Courses() {
    const [cards, setCards] = useState([]);
    const [openedCoursePageId, setOpenedCoursePageId] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/courses/`
            ).then((res) => res.json());
            setCards(data);
        })();
    }, []);

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline/>
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Available Courses
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                You can see available courses in this page. feel free to click on every course you are
                                interested in and read the description of its.
                            </Typography>
                            <Stack
                                sx={{pt: 2}}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                {/*<MainSearch/>*/}
                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{py: 0}} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                    >
                                        <CardMedia
                                            component="div"
                                            sx={{
                                                // 16:9
                                                pt: '56.25%',
                                            }}
                                            image={`https://picsum.photos/seed/foobar${card.name}/200`}
                                        />
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {/*{card.name}*/}
                                                {card.name}
                                            </Typography>
                                            <Typography>
                                                {card.description}
                                            </Typography>
                                            <br/>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="medium" onClick={() => {
                                                try {
                                                    axios.defaults.withCredentials = true;
                                                    axios.post(`${process.env.REACT_APP_BACKEND_URL}/courses/${card.pk}/enroll`)
                                                        .then(() => {
                                                            window.location.assign('/Dashboard')
                                                        })
                                                        .catch((response) => {
                                                            console.log(response)
                                                            alert(response.response.data)
                                                        });
                                                } catch (error) {
                                                    alert('Signup failed. Please try again.');
                                                }
                                            }}>
                                                Enroll
                                            </Button>
                                            <Typography>
                                                price: {card.price}
                                            </Typography>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
            <Dialog open={openedCoursePageId} onClose={() => setOpenedCoursePageId(null)}>
                <CoursePage courseId={openedCoursePageId}/>
            </Dialog>
            <MainFooter/>
        </>
    );
}
