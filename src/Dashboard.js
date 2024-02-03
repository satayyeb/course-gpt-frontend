import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AddCircle, ImportContactsSharp} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {ArrowRightIcon} from "@heroicons/react/16/solid";

const drawerWidth = 240;

function Dashboard(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [courses, setCourses] = useState([]);
    const [balance, setBalance] = useState(0);
    const [username, setUsername] = useState('User');
    const [userType, setUserType] = useState('');
    const [read, setRead] = useState(null);
    const [content, setContent] = useState(null);
    const main = useRef()
    // useEffect(() => {
    //     if (read) {
    //
    //     }
    // }, [read])

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/enrolls/`)
            .then(function (response) {
                setCourses(response.data)
            })
            .catch(function (response) {
                console.log('error in fetch enrolls. read the Important note in README.md of the project :|');
            });
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/whoami/`)
            .then(function (response) {
                setBalance(response.data.balance)
                setUsername(response.data.username)
                setUserType(response.data.type)
                console.log(userType)
            })
            .catch(function (response) {
                console.log('error in whoami.');
            });

    }, [])

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    p: 1.5,
                    pb: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Avatar size="lg"/>
                <div>
                    <Typography level="title-md">{username}</Typography>
                    <Typography level="body-sm">Balance: {balance}</Typography>
                </div>
            </Box>
            <Divider/>
            <List>
                {courses.map((course, index) => (
                    <ListItem key={course.name} disablePadding>
                        <ListItemButton onClick={() => {
                            axios.defaults.withCredentials = false;
                            axios.get(course.file_url)
                                .then(function (response) {
                                    setContent({__html: response.data})
                                })
                                .catch(function (response) {
                                    console.log('error in fetch the course');
                                });
                            // setRead(course.file_url)
                        }}>
                            <ListItemIcon>
                                <ImportContactsSharp/>
                            </ListItemIcon>
                            <ListItemText primary={course.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            {userType === 'STUDENT' &&
                <List>
                    <ListItem key="Enroll a new course" disablePadding>
                        <ListItemButton component={Link} to="/courses">
                            <ListItemIcon>
                                <AddCircle/>
                            </ListItemIcon>
                            <ListItemText primary="Enroll a new course"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            }
            {userType === 'TEACHER' &&
                <List>
                    <ListItem key="Generate a new course" disablePadding>
                        <ListItemButton component={Link} to="/courses">
                            <ListItemIcon>
                                <AddCircle/>
                            </ListItemIcon>
                            <ListItemText primary="Generate a new course"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            }
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


            <Box
                component="main"
                sx={{flexGrow: 1, p: 6, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <div dangerouslySetInnerHTML={content} ref={main}/>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
