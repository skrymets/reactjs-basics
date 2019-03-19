import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header"
import {DataContent} from "./components/DataContent";

class Application extends React.Component {
    constructor() {
        super();

        this.state = {
            homeLinkText: "Home",
            age: 1.4,
            name: "Max",
            hobbies: ["sleep", "eat", "cartoons"],
            mountContentComponent: false,
    }
        ;
    }

    onUpdateHomeLink(newLinkText) {
        this.setState({
            homeLinkText: newLinkText
        });
        console.info("Changed: " + newLinkText)
    }

    onGreet() {
        console.log("Hello from 'Application' - a ReactJS Component!")
    }

    onChangeMountContentComponent() {
        this.setState({
            mountContentComponent: !this.state.mountContentComponent
        })
    }

    render() {
        let contentComponent = "";
        if (this.state.mountContentComponent) {
            contentComponent = (
                <DataContent
                    name={this.state.name}
                    age={this.state.age}
                    hobbies={this.state.hobbies}
                    greet={this.onGreet}
                    homeLinkText={this.state.homeLinkText}
                    updateHomeLink={this.onUpdateHomeLink.bind(this)}>
                    <p>Ac tortor dignissim convallis aenean et tortor at risus viverra.
                        Consectetur adipiscing elit duis tristique sollicitudin nibh.
                        Ullamcorper a lacus vestibulum sed arcu non odio euismod.
                    </p>
                </DataContent>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <Header linkText={this.state.homeLinkText}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <p>{this.state.homeLinkText}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        {contentComponent}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <button onClick={this.onChangeMountContentComponent.bind(this)} className="btn btn-primary">(Un)Mount Content Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(
    <Application/>,
    window.document.getElementById("app")
);
