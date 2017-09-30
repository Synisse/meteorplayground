import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import Navbar from '../navbar/Navbar';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <Navbar/>
                Main-Container
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, MainContainer);