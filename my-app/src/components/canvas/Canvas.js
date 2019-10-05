import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "score": 0
        }
    }

    render() {
        return (
            <div className="center">
                <h4>{this.props.txt}</h4>
                <p>Score {this.state.score}</p>
            </div>
        );
    }
}

export default Canvas;