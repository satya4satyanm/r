import React from 'react';

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "score": 0
        }
    }

    render() {
        return (
            <div className="right">
                <h4>{this.props.txt}</h4>
                <p>Score {this.state.score}</p>
            </div>
        );
    }
}

export default Resources;