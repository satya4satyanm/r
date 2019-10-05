import React from 'react';
import M from '../../model/p.json';

import './Resources.scss';

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "score": 0
        }
    }

    getList(tifs) {
        return tifs.map((val, i) => {
                return (
                    <div key={i}> 
                        <img src="" width="50" height="50"/>
                        <p>{val["n"]}</p>
                    </div>
                );
            }
        )
    }

    render() {
        return (
            <div className="right">
                {/* <h4>{this.props.txt}</h4> */}
                {/* <p>Score {this.state.score}</p> */}
                <div className="tab-container">
                    <div className="products">
                        <h5>Products</h5>
                        <div>
                            {this.getList(M["p"])}
                        </div>
                    </div>
                    <div className="graphics">
                        <h5>Graphics</h5>
                        <div>
                            {this.getList(M["g"])}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resources;