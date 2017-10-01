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
        this.setState({selectedEntry: aEntry});
    }

    getActiveClass (aEntry) {
        if(this.state.selectedEntry === aEntry) {
            return 'link-font active-navbar-item';
        }

        return 'link-font';
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="nav-bar-link-container">
                    <NavLink onClick={this.selectEntry.bind(this, 'aboutme')} className={this.getActiveClass.bind(this, 'aboutme')()} to="/aboutme">About me</NavLink>
                </div>
                <div className="nav-bar-link-container">
                    <NavLink onClick={this.selectEntry.bind(this, 'projects')} className={this.getActiveClass.bind(this, 'projects')()} to="/projects">Projects</NavLink>
                </div>
                <div className="nav-bar-link-container">
                    <NavLink onClick={this.selectEntry.bind(this, 'contact')} className={this.getActiveClass.bind(this, 'contact')()} to="/contact">Contact</NavLink>
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, NavbarContainer);