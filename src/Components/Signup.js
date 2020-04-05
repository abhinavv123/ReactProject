import React from 'react';
import Hidden from './hidden.js';
import datajson from '../data.json';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            form:{
                username:"",
                password:""
            },
            valid:{
                formu:false,
                formp:false,
                forms:false,
                formc:false,
                formvalid:false
            },
            message:""
        }
    }

    componentDidMount=()=>{
    }
    
    handlechange=(e)=>{
        e.preventDefault();
        let temp=this.state.form;
        
        if(e.target.id==="name")
        {
            temp.username=String(e.target.value);
            this.setState({form:temp});
        }
        else if(e.target.id==="password")
        {
            temp.password=String(e.target.value);
            this.setState({form:temp});
        }
        if(temp.username.length>0 && temp.password.length>0)
        { 
            let temp2=this.state.valid;
            temp2.formvalid=true;
            this.setState({valid:temp2});
        }
        else
        {
            let temp2=this.state.valid;
            temp2.formvalid=false;
            this.setState({valid:temp2});
        }
    }

    validate=(e)=>
    {
        e.preventDefault();
        console.log(e.target.value);
        let temp=this.state.form;
        let dataa=JSON.stringify(datajson);
        let obj=JSON.parse(dataa);
        //console.log(obj);
        let found = obj.data.find((datta)=>
        {
            return ((temp.username===datta.username || temp.username===datta.email) && temp.password===datta.password);     
        })
        
        if(!found)
        {
            this.setState({message:"Invalid email/username or password !"});
        }
        else
        {
            this.setState({message:""});
        }
    }

    hide=()=>{
        let temp=this.state.valid;
        temp.formc=true;
        this.setState({valid:temp});
    }

    render() {
        return (<div>
            {this.state.valid.formc?<div><Hidden/></div>:<div>
            <div className="container">
                <div className="row" style={{margin:'100px'}}>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Sign In
                                <button type="button" className="close" onClick={this.hide} aria-label="close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name"><span style={{color:"grey"}}>Email or Username</span></label>
                                        <input type="text" id="name" className="form-control" style={{width:'60%'}} onChange={this.handlechange} required></input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password"><span style={{color:"grey"}}>Password</span></label>
                                        <input type="password" id="password" className="form-control" style={{width:'60%'}} onChange={this.handlechange} required></input>
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="checkbox" name="stay" id="stay" value="stay" disabled></input>
                                        <span style={{color:"grey"}}>&nbsp;stay signed-in</span>
                                        <button className="btn btn-primary float-right" type="button" disabled={!this.state.valid.formvalid} onClick={this.validate}>Sign in</button>
                                    </div>
                                    <span className="text-danger">{this.state.message}</span>

                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="form-group">
                                        <button className="btn btn-light btn-lg btn-block" >Create account </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
        );
    }
}

export default Signup;
