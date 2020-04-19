import React from 'react';
import '../App.css';
import blusky from '../blusky.jpeg';
import { Link } from 'react-router-dom';
import fb from '../images/fb.png';
import li from '../images/download.png';
import sky from '../images/sky.png';
import tw from '../images/tw.png';
import axios from 'axios';
 
class Info extends React.Component{
    constructor()
    {
        super();
        this.state={
            obj:"",
            user:"",
            sendpart:false,
            messagesend:""
        }
    }

    componentWillMount=()=>{
        this.setState({obj:this.props.child,user:this.props.user});
    }

    send=(e)=>{
        this.setState({messagesend:e.target.value});
    }

    sent=()=>{
        let dum=this.state.obj;
        let sender=this.state.user.username;
        let flag=0;
        for(let i=0;i<dum.MR.length;i++)
        {
            if(dum.MR[i].sendername===sender.username)
            {
                dum.MR[i].message.push(this.state.messagesend);
                flag=1;
                break;
            }
        }
        if(flag===0)
        {
            let message=[];
            message.push(this.state.messagesend);
            let object={
                name:sender,
                message:message
            }
            dum.MR.push(object);
        }

        flag=0;
        dum=this.state.user;
        sender=this.state.obj.username;
        for(let i=0;i<dum.MS.length;i++)
        {
            if(dum.MS[i].sendername===sender.username)
            {
                dum.MS[i].message.push(this.state.messagesend);
                flag=1;
                break;
            }
        }
        if(flag===0)
        {
            let message=[];
            message.push(this.state.messagesend);
            let object={
                name:sender,
                message:message
            }
            dum.MS.push(object);
        }
        this.setState({user:dum,obj:dum,sendpart:false});
        dum=JSON.stringify(dum);
        console.log(dum);
        let o={
            email:"abhin@infosys.com",
            username:"ab",
            password:"abd",
            name:"Abhinam",
            Department:"Ening",
            phone:"(956)010-559",
            Officephone:"(404)1-5529",
            status:"Avlable",
            Office:"Hinadi",
            Supervisor:"NA",
            Sex:"male",
            birthday:"Apr30",
            profile:"SysEngineer",
            City:"Pune",
            MS:[],
            MR:[]

        }

        axios.post('http://localhost:4000/data',o,{headers:{"Content-Type" : "application/json"}}).then(result=>{
            console.log(result.data.message);
        }).catch(er=>{
            console.log(er);
        })
    }
    render()
    {
        return(
        <div className="card" >
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
            <hr/>
            <button className="text-center btn-primary" type="button" onClick={()=>{this.setState({sendpart:true})}} style={{padding:"0px"}}>Send Message</button>
            <br/>
            
            {this.state.sendpart?<form className="form-inline">
                <div className="form-group">
                <label htmlFor="sendmsg">
                    <textarea className="form-control" id="form-control" rows="5" cols="30" placeholder="type a message" onChange={this.send}></textarea>
                </label>
                <button type="button" className="btn btn-primary" onClick={this.sent}>Send</button>
            </div></form>:<div></div>}
            <br/><br/>
        </div>)
    }
}

export default Info;