import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header"
import {HomeContent} from "./components/HomeContent";

class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <HomeContent/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<Application/>, window.document.getElementById("app"))
