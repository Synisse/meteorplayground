import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import App from './ui/App.jsx';
import NotFoundPage from './ui/NotFound.jsx';
import LandingPage from './ui/landingpage.jsx';
import MainContainer from './ui/maincontainer/Main';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <Route exact path="/" component={MainContainer}/>
            <Route exact path="/landingpage" component={LandingPage}/>
            <Route path="/404" component={NotFoundPage}/>
        </div>
    </Router>
);