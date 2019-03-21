import React from 'react';
import {PropTypes} from 'prop-types';

export class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }

    render() {
        return (
            <div>
                <h3>Profile</h3>
                <p>Name: {this.props.name}</p>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ProfileComponent.propTypes = {
    name: PropTypes.string,
    /**
     *     homeLinkText: PropTypes.string,
     age: PropTypes.number,
     hobbies: PropTypes.array,
     greet: PropTypes.func,
     updateHomeLink: PropTypes.func
     */
};