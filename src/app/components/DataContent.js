import React from 'react';
import {PropTypes} from 'prop-types';

export class DataContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            name: props.name,
            hobbies: props.hobbies,
            homeLinkText: props.homeLinkText
        };
        console.info("Constructor");
    }

    componentWillMount() {
        console.info("componentWillMount");
    }

    componentDidMount() {
        console.info("componentDidMount");
    }

    componentWillUnmount() {
        console.info("componentWillUnmount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //super.shouldComponentUpdate(nextProps, nextState, nextContext);
        console.info("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //this.shouldComponentUpdate(nextProps, nextState, nextContext);
        console.info("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //super.componentDidUpdate(prevProps, prevState, snapshot);
        console.info("componentDidUpdate");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //super.componentWillReceiveProps(nextProps, nextContext);
        console.info("componentWillReceiveProps");
    }

    updateHomeLinkText() {
        this.props.updateHomeLink(this.state.homeLinkText);
        console.info("updateHomeLinkText " + this.state.homeLinkText)
    }

    onChangeLinkText(evt) {
        this.setState({
            homeLinkText: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <p>
                    <span>{this.state.name}</span>
                    <span> is </span>
                    <span>{this.state.age}</span>
                    <span> y.o. </span>
                </p>
                <h4>Hobbies:</h4>
                <ul>
                    {this.state.hobbies.map((hobby, i) => <ul key={i}>{hobby}</ul>)}
                </ul>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLinkText} onChange={this.onChangeLinkText.bind(this)}/>
                <button onClick={this.updateHomeLinkText.bind(this)} className="btn btn-primary">Change Home Link Text
                </button>
            </div>
        );
    }
}

DataContent.propTypes = {
    name: PropTypes.string,
    homeLinkText: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    greet: PropTypes.func,
    updateHomeLink: PropTypes.func
};