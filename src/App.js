import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Courses from "./Courses";
// import Home from "./Home";
// import NoPage from "./NoPage";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import MainNavbar from "./MainNavbar";
// import Login from "./Login";
// import Signup from './SignUp';
// import Logout from "./Logout";

const LazyCourses = lazy(() => import("./Courses.js"));
const LazyHome = lazy(() => import("./Home"));
const LazyNoPage = lazy(() => import("./NoPage"));
const LazyDashboard = lazy(() => import("./Dashboard"));
const LazyProfile = lazy(() => import("./Profile"));
const LazyMainNavbar = lazy(() => import("./MainNavbar"));
const LazyLogin = lazy(() => import("./Login"));
const LazySignup = lazy(() => import("./SignUp"));
const LazyLogout = lazy(() => import("./Logout"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMainNavbar />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="Home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="Courses"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyCourses />
              </Suspense>
            }
          />
          <Route
            path="Dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyDashboard />
              </Suspense>
            }
          />
          <Route
            path="Profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyProfile />
              </Suspense>
            }
          />
          <Route
            path="Login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLogin />
              </Suspense>
            }
          />
          <Route
            path="SignUp"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazySignup />
              </Suspense>
            }
          />
          <Route
            path="Logout"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLogout />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyNoPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
