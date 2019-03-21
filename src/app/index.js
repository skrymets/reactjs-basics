import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import {Header} from "./components/Header"
import {DataContent} from "./components/DataContent";
import {ProfileComponent} from "./components/ProfileComponent";
import {HomeComponent} from "./components/HomeComponent";

class Application extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">ReactJS</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <Route exact path={"/"} component={HomeComponent}/>
                <Route path={"/home"} component={HomeComponent}/>
                <Route path={"/profile"} component={ProfileComponent}/>
            </Router>
        );
    }
}

render(
    <Application/>,
    window.document.getElementById("app")
);
