import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }

    render() {
        return (
            <div className="main-container">

                hi
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, LandingPage);