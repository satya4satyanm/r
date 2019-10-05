import React from 'react';
import './Left.scss';

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "score": 0
        }
    }

    render() {
        return (
            <div className="left">
                <img src="" width="50" height="50"/>
                <img src="" width="50" height="50"/>
            </div>
        );
    }
}

export default Left;