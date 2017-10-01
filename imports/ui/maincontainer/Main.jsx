import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <div className="content-area">
                    <div className="info-text">

                        /* <br/>
                        * Hi, this is me!<br/>
                        *<br/>
                        *<br/>
                        *<br/>
                        */

                    </div>
                    <div className="profile-wrapper">
                        <div className="profile-image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {};
}, MainContainer);