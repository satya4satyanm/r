import React from 'react';

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
                <h4>Left</h4>
                <p>Score {this.state.score}</p>
            </div>
        );
    }
}

export default Left;