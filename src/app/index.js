import React from "react";
import {render} from "react-dom";

class Application extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello!</h1>
            </div>
        );
    }
}

render(<Application/>, window.document.getElementById("app"))
