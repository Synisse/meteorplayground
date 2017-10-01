import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import MainContainer from './ui/maincontainer/Main';
import ProjectsContainer from './ui/projectscontainer/Projects';
import ContactContainer from './ui/contact/Contact';

import NavBar from './ui/navbar/Navbar';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <NavBar/>
            <Route exact path="/aboutme" component={MainContainer}/>
            <Route exact path="/projects" component={ProjectsContainer}/>
            <Route exact path="/contact" component={ContactContainer}/>
            <Redirect from="/" to="/aboutme" />
        </div>
    </Router>
);