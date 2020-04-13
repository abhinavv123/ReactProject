import React from 'react';
import '../App.css';
import blusky from '../blusky.jpeg';

class Info extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:""
        }
    }

    componentDidMount=()=>{
        console.log(this.props.child);
        this.setState({data:this.props.child});
    }
    render()
    {
        return(<div className="card">
            <div className="card-header">
                <img className="card-img-top rounded-circle" style={{borderRadius:"15px"}} src={blusky} alt="PROFILE-PIC"/>
                <h1>{this.state.data}</h1>
            </div>
            <div className="card-body">

            </div>
        </div>)
    }
}

export default Info;