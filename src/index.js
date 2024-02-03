import { lazy } from 'react';
import ReactDOM from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import App from "./App";

import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.headers.common["API_TOKEN"] = process.env.API_TOKEN;

const App = lazy(() => import('./App.js'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
