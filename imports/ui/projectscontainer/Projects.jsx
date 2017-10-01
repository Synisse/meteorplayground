import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class ProjectsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="projects-container">
                projects-Container
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, ProjectsContainer);