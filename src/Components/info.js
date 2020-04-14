import React from 'react';
import '../App.css';
import blusky from '../blusky.jpeg';
import { Link } from 'react-router-dom';
import fb from '../fb.png';
import li from '../download.png';
import sky from '../sky.png';
import tw from '../tw.png';
 
class Info extends React.Component{
    constructor()
    {
        super();
        this.state={
            obj:""
        }
    }

    componentWillMount=()=>{
        this.setState({obj:this.props.child});
    }
    render()
    {
        return(
        <div className="card">
            <div className="card-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" >
                            <img className="card-img-top rounded-circle" src={blusky} alt="PROFILE-PIC" style={{ height: "70px", width: "70px",alignContent:"left"}}/>
                        </div>
                        <div className="col-md-8" style={{paddingLeft:"0px"}}>
                            <h5>{this.props.child.name}</h5>
                            <div style={{ color: "grey", fontSize:"14px"}}>{this.props.child.profile}</div>
                            
                            {this.props.child.status === "Available" ?
                            <div>
                                <span className="dot" style={{ height: "10px", width: "10px" ,borderRadius:"50%", display:"inline-block", backgroundColor:"green"}}></span>&nbsp;
                                <span className="text-success " style={{ fontSize:"14px"}}>{this.props.child.status}</span>
                            </div> : <div>
                                <span className="dot" style={{ height: "10px", width: "10px" ,borderRadius:"50%", display:"inline-block", backgroundColor:"red"}}></span>&nbsp;
                                <span className="text-danger "  style={{ fontSize:"11px"}}>{this.props.child.status}</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div style={{ textAlign: "center" }}>
                    <b>Contact Information</b>
                </div>
                <div className="row">
                    <div className="col-md-5" style={{ textAlign: "right",fontSize:"11px" }}>
                        <div>Office Telephone</div>
                        <div>Mobile</div>
                        <div>email</div>
                    </div>
                    <div className="col-md-7" style={{ textAlign: "left" ,fontSize:"11px"}}>
                        <div>{this.props.child.Officephone}</div>
                        <div>{this.props.child.phone}</div>
                        <div>{this.props.child.email}</div>
                    </div>
                </div>
                <br/>
                <div className="text-center">
                    <Link to="www.facebook.com"><img src={fb} alt="fb" className="rounded-circle" style={{height:"20px",width:"20px"}}></img></Link>&nbsp;
                    <Link to="www.twitter.com"><img src={tw} alt="tw" className="rounded-circle" style={{height:"20px",width:"20px"}}></img></Link>&nbsp;
                    <Link to="www.linkedin.com"><img src={li} alt="li" className="rounded-circle" style={{height:"20px",width:"20px"}}></img></Link>&nbsp;
                    <Link to="www.skype.com"><img src={sky} alt="sky" className="rounded-circle" style={{height:"20px",width:"20px"}}></img></Link>
                </div>
            </div>
            <hr className="text-muted"/>
            <div className="card-body">
                <div style={{ textAlign: "center" }}>
                    <b>Work Information</b>
                </div>
                <div className="row">
                    <div className="col-md-5" style={{ textAlign: "right" ,fontSize:"11px"}}>
                        <div>Department</div>
                        <div>Supervisor</div>
                        <div>Office</div>
                    </div>
                    <div className="col-md-7" style={{ textAlign: "left" ,fontSize:"11px"}}>
                        <div>{this.props.child.Department}</div>
                        <div>{this.props.child.Supervisor}</div>
                        <div>{this.props.child.Office}</div>
                    </div>
                </div>
            </div>
            <hr className="text-muted"/>
            <div className="card-body">
                <div style={{ textAlign: "center" }}>
                    <b>Personal Information</b>
                </div>
                <div className="row">
                    <div className="col-md-5" style={{ textAlign: "right" ,fontSize:"11px"}}>
                        <div>Sex</div>
                        <div>Birthday</div>
                        <div>City</div>
                    </div>
                    <div className="col-md-7" style={{ textAlign: "left" ,fontSize:"11px"}}>
                        <div>{this.props.child.Sex}</div>
                        <div>{this.props.child.birthday}</div>
                        <div>{this.props.child.City}</div>
                    </div>
                </div>
            </div>
            <hr/><br/><br/><br/><br/>
        </div>)
    }
}

export default Info;