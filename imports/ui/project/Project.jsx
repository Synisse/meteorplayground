import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createContainer } from 'meteor/react-meteor-data';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        }
    }

    onMouseOver() {
        this.setState({isMouseOver: true});
    }

    onMouseLeave() {
        this.setState({isMouseOver: false});
    }

    generateHashtags() {
        let aTechString = '';

        this.props.project.technology.map((aTech) => {
            aTechString = aTechString + '#' + aTech + ' ';
        });

        return aTechString;
    }

    render() {
        return (
            <div
                className="project-container"
                style={{backgroundImage: "url(" + this.props.project.image + ")"}}
                onMouseEnter={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                <div className={this.state.isMouseOver ? 'cover cover-hovered' : 'cover'}/>
                <div className={this.state.isMouseOver ? 'project-title title-hovered' : 'project-title'}>
                    {this.props.project.name}
                </div>

                {this.state.isMouseOver ?
                    <div className="hashtag-container">
                        {this.generateHashtags()}
                    </div>
                    : null
                }

            </div>
        );
    }
}


Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export default createContainer(() => {
    return {
    };
}, Project);