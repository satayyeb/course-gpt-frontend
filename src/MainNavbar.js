import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const drawerWidth = 240;
const navItems = ['Home', 'Courses', 'Dashboard', 'Login', 'Signup', 'Logout'];

function MainNavbar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/whoami/`)
            .then(function (response) {
                setLogin(true)
            })
            .catch(function (response) {
                setLogin(false)
            });

    }, [])

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleItemClick = (item) => {
        handleDrawerToggle();
        navigate(item);
    };

    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Menu
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} onClick={() => handleItemClick(item)}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            CourseGPT
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{color: '#fff', display: (!login && (item === 'Dashboard' || item === 'Logout'))||(login && (item === 'Login' || item === 'Signup')) ? 'none': null}}>
                                    <Link to={item} style={{color: '#fff', textDecoration: "none"}}>{item}</Link>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
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
                </nav>

                <Box component="main" sx={{p: 3}}>
                    a
                </Box>
            </Box>
            <Outlet/>
        </>
    );
}

MainNavbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MainNavbar;