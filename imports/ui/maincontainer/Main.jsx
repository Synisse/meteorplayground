import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                Main-Container
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, MainContainer);