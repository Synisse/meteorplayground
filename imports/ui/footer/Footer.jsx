import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-container">
                <div className="bottom-bar"></div>

                <div className="link-bar">
                    <div className="twitter">

                    </div>
                    <div className="google"></div>
                    <div className="github"></div>
                    <div className="xing"></div>
                    <div className="linkedin"></div>
                    <div className="mail"></div>
                </div>
                <div className="impressum"></div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, Footer);