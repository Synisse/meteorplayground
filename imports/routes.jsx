import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import MainContainer from './ui/maincontainer/Main';
import ProjectsContainer from './ui/projectscontainer/Projects';
import ContactContainer from './ui/contact/Contact';

import NavBar from './ui/navbar/Navbar';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <NavBar history={browserHistory}/>
            <Switch>
                <Route exact path="/aboutme" component={MainContainer}/>
            </Switch>
            <Switch>
                <Route exact path="/projects/:id" component={ProjectsContainer}/>
            </Switch>
            <Switch>
                <Route exact path="/contact" component={ContactContainer}/>
            </Switch>
            <Switch>
                <Redirect exact from="/*" to="/aboutme" />
            </Switch>
        </div>
    </Router>
);