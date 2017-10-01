import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

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
                    <div className="button-wrapper" onClick={this.selectEntry.bind(this, 'aboutme')}>
                        <Link className={this.getActiveClass.bind(this, 'aboutme')()} to="/aboutme">About me</Link>
                    </div>
                </div>
                <div className="nav-bar-link-container">
                    <div className="button-wrapper">
                        <NavLink onClick={this.selectEntry.bind(this, 'projects')} className={this.getActiveClass.bind(this, 'projects')()} to="/projects">Projects</NavLink>
                    </div>
                </div>
                <div className="nav-bar-link-container">
                    <div className="button-wrapper">
                        <NavLink onClick={this.selectEntry.bind(this, 'contact')} className={this.getActiveClass.bind(this, 'contact')()} to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {
    };
}, NavbarContainer);