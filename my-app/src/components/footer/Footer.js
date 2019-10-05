import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "score": 0
        }
    }

    render() {
        return (
            <div className="footer">
                <p>Copyright @Satya</p>
            </div>
        );
    }
}

export default Footer;