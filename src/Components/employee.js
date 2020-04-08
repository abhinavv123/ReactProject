import React from 'react';
import axios from 'axios';

class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/data').then(result => {
            let found = result.data.find(pair => {
                return ((this.props.match.params.name === pair.username || this.props.match.params.name === pair.email) && this.props.match.params.password === pair.password)
            })
            this.setState({ data: found });
            console.log(found);
        }
        ).catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.props.match.params.name);
        return (
            <div>
                <div className="container" style={{ margin: '100px' }}>
                    <div className="row">
                        <nav className="navbar navbar-default">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    Home
                            </li>
                                <li className="nav-item">
                                    Contact Us
                            </li>
                                <li className="nav-item">
                                    About
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee;