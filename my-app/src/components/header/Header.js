import React from 'react';
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "score": 0
        }
    }

    render() {
        return (
            <div className="header">
                <h1>{this.props.txt}</h1>
            </div>
        );
    }
}

export default Header;