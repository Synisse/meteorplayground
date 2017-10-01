import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import NotFoundPage from './ui/NotFound.jsx';
import LandingPage from './ui/landingpage.jsx';
import MainContainer from './ui/maincontainer/Main';
import NavBar from './ui/navbar/Navbar';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <NavBar/>
            <Route exact path="/aboutme" component={MainContainer}/>
            <Route exact path="/landingpage" component={LandingPage}/>
            <Route path="/404" component={NotFoundPage}/>
            <Redirect from="/" to="/aboutme" />
        </div>
    </Router>
);