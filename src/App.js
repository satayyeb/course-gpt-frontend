import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";


import NoPage from "./NoPage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import MainNavbar from "./MainNavbar";
import Login from "./Login";
import Signup from './SignUp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainNavbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Home" element={<Home/>}/>
                    <Route path="Courses" element={<Courses/>}/>
                    <Route path="Dashboard" element={<Dashboard/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="SignUp" element={<Signup/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
