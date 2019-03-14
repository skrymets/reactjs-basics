import React from 'react';

export class Header extends React.Component {
    render() {
        return(
            <div className="navbar navbar-nav">
                <div className="container">
                    <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <li><a>{this.props.linkText}</a></li>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
