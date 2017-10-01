import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class ContactContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact-container">
                contact-Container
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, ContactContainer);