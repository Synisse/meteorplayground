import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { createContainer } from 'meteor/react-meteor-data';

class NavbarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: 'aboutme'
        };
    }

    // workaround to trigger component rerender
    selectEntry (aEntry) {
        this.setState({selected: aEntry});
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="nav-bar-link-container">
                    <NavLink onClick={this.selectEntry.bind(this, 'aboutme')} activeClassName="active-navbar-item" className="link-font" to="/aboutme">About m</NavLink>
                </div>
                <div className="nav-bar-link-container">
                    <NavLink onClick={this.selectEntry.bind(this, 'projects')} activeClassName="active-navbar-item" className="link-font" to="/projects">Projects</NavLink>
                </div>
                <div className="nav-bar-link-container">
                    <NavLink onClick={this.selectEntry.bind(this, 'contact')} activeClassName="active-navbar-item" className="link-font" to="/contact">Contact</NavLink>
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, NavbarContainer);