import React from 'react';
import Signup from './Signup';
class Hidden extends React.Component {
    constructor() {
        super();
        this.state = {
            hide: false
        }
    }

    componentDidMount = () => {
    }

    change = () => {
        this.setState({ hide: true })
    }
    render() {
        return (
            <div>{this.state.hide ? <Signup /> :
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 "></div>
                        <div className="col-md-6 ">
                            <div className="card" style={{ margin: "100px" }}>
                                <div className="card-header">
                                    <h1 style={{ color: "grey" }}>WELCOME
                                    <button type="button" className="close" aria-label="close" onClick={this.change}>
                                        &times;
                                    </button>
                                    </h1>
                                </div>
                                <div className="card-body">
                                    <img className="card-img-top" src="blusky.jpeg" alt="ICON" />
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-dark float-right btn-lg" onClick={this.change}> Go Back</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>}
            </div>)
    }
}

export default Hidden;