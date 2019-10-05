import React from 'react';
import './Canvas.scss';

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
                {/* <h4>{this.props.txt}</h4> */}
                <div className="designer">
                    <div className="design-area">satya</div>
                    <div className="controls"> ss</div>
                </div>
            </div>
        );
    }
}

export default Canvas;