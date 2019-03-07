import React from 'react';

export class Header extends React.Component {
    render() {
        return(
            <div className="navbar navbar-dark">
                <div className="container">
                    <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <li><a>Home</a></li>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
