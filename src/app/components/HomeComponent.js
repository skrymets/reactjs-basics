import React from 'react';
import {PropTypes} from 'prop-types';

export class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}

HomeComponent.propTypes = {
    name: PropTypes.string,
    /**
     *     homeLinkText: PropTypes.string,
     age: PropTypes.number,
     hobbies: PropTypes.array,
     greet: PropTypes.func,
     updateHomeLink: PropTypes.func
     */
};