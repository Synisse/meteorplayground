import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class NavbarContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-container">
                navbar-Container
                <div className="aboutme" to="/">About Me</div>
                <div className="projects" to="/projects">Projects</div>
                <div className="contact">Contact</div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, NavbarContainer);