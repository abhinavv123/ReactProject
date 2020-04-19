import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import blusky from "../blusky.jpeg";
import '../App.css';
import searchicon from '../images/searchicon.png';
import Navbar from './navbar.js';
import Info from './info';
class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            Department: "All",
            Status: "All",
            name: "",
            arr: [],
            obj: "",
            advance:false,
            hide:true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/data').then(result => {
            let found = result.data.find(pair => {
                return ((this.props.match.params.name === pair.username || this.props.match.params.name === pair.email) && this.props.match.params.password === pair.password)
            })
            this.setState({ data: found, arr: result.data });
            console.log(found);
        }
        ).catch(err => {
            console.log(err);
        })
    }

    handletable = (e) => {
        e.preventDefault();
        if (e.target.id === "search") {
            this.setState({ name: e.target.value });
        }
        else if (e.target.id === "dept2") {
            this.setState({ Department: e.target.value });
        }
        else if (e.target.id === "avail") {
            this.setState({ Status: e.target.value });
        }
    }

    change=()=>{
        document.getElementById("search").placeholder="";
        document.getElementById("search").style.backgroundImage=null;
    }

    unchange=()=>{
        document.getElementById("search").placeholder="    type in a name";
        document.getElementById("search").style.backgroundImage="url('../searchicon.png')";
    }
    givetable = () => {
        let rows = [];
        for (let i = 0; i < this.state.arr.length; i++) {
            if ((this.state.arr[i].name.startsWith(this.state.name)===true || this.state.name === "") && (this.state.arr[i].Department === this.state.Department || this.state.Department === "All") && (this.state.Status === "All" || this.state.Status === this.state.arr[i].status) && (this.state.data !== this.state.arr[i])) 
            {
                let varr = null;
                if (this.state.arr[i].status === "Available") {
                    let dott = <span className="dot" style={{ height: "9px", width: "9px", borderRadius: "50%", display: "inline-block", backgroundColor: "green" }}></span>
                    varr = <td style={{ color: "green", fontSize: "12px" }}>{dott}&nbsp;{this.state.arr[i].status}</td>
                }
                else {
                    let dott = <span className="dot" style={{ height: "9px", width: "9px", borderRadius: "50%", display: "inline-block", backgroundColor: "red" }}></span>
                    varr = <td style={{ color: "red", fontSize: "12px" }}>{dott}&nbsp;{this.state.arr[i].status}</td>
                }
                rows.push(
                    <tr key={this.state.arr[i].username} onClick={() => this.setState({ obj: this.state.arr[i],hide:false })} value={this.state.arr[i]}>
                        <td style={{ fontSize: "12px" }}> 
                            <img className="inline-block rounded-circle" src={blusky} alt="Logo" style={{ height: "20px", width: "20px" }} ></img>
                            &nbsp;&nbsp;
                            {this.state.arr[i].name}
                        </td>
                        <td style={{ fontSize: "12px" }}>{this.state.arr[i].Department}</td>
                        <td style={{ fontSize: "12px" }}>{this.state.arr[i].phone}</td>
                        {varr}
                    </tr>
                )
            }
        }
        return (
            <div>
                <table className="table table-hover " id="tableshow" >
                    <thead>
                        <tr >
                            <th style={{ fontSize: "14px" }} >Name</th>
                            <th style={{ fontSize: "14px" }}>Department</th>
                            <th style={{ fontSize: "14px" }}>Phone Number</th>
                            <th style={{ fontSize: "14px" }}>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>)
    }

    handlename = (e) => {
        e.preventDefault();

    }

    render() {
        let big=<div>
            <div className="card">
                                <div className="card-body">

                                    <span style={{ color: "grey", fontSize: "12px" }}> Home&nbsp;
                                        <i className="fa fa-angle-right"></i>
                                            &nbsp;
                                        <b style={{ color: "grey", fontSize: "12px" }}>Employee</b>
                                    </span>

                                    <button className="button1 float-right" type="button" style={{ borderRadius: "5px", backgroundColor: "white", borderColor: "Dodgerblue" }}>
                                        <b style={{ color: "Dodgerblue", fontSize: "12px" }} >Add Employee +</b>
                                    </button><br /><br />
                                    <hr />

                                    <h2 style={{ color: "grey" }}>Employee Directory</h2>

                                    <br />
                                    <div className="row">
                                        <div className="col-md-4" style={{ paddingRight: "0" }}>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="search" style={{ fontSize: "14px" }}>Name</label><br />
                                                    <div className="col-sm-12">
                                                        <input className="form-control"
                                                            type="text"
                                                            id="search"
                                                            style={{ border: "none", backgroundImage: `url(${searchicon})`, backgroundRepeat: "no-repeat" }}
                                                            placeholder="     Type in a name..."
                                                            onChange={this.handletable}
                                                            onFocus={this.change} 
                                                            onBlur={this.unchange}
                                                            >
                                                        </input>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-3" style={{ paddingLeft: "0px", paddingRight: "0" }}>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="dept2" style={{ fontSize: "14px" }}>Department</label>
                                                    <div className="col-sm-12">
                                                        <select id="dept2" name="dept2" className="form-control" onChange={this.handletable}>>
                                                        <option default value="All" style={{ fontSize: "14px" }}>All</option>
                                                            <option value="Sales" style={{ fontSize: "14px" }}>Sales</option>
                                                            <option value="Marketing" style={{ fontSize: "14px" }}>Marketing</option>
                                                            <option value="Engineer" style={{ fontSize: "14px" }}>Engineer</option>
                                                            <option value="Design" style={{ fontSize: "14px" }}>Design</option>
                                                            <option value="Accountant" style={{ fontSize: "14px" }}>Accountant</option>
                                                            <option value="Finance" style={{ fontSize: "14px" }}>Finance</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-3" style={{ paddingLeft: "0px", paddingRight: "0" }}>
                                            <form >
                                                <div className="form-group">
                                                    <label htmlFor="avail" style={{ fontSize: "14px" }}>Availability</label>
                                                    <div className="col-sm-12">
                                                        <select id="avail" name="avail" className="form-control" onChange={this.handletable}>>
                                                        <option default value="All" style={{ fontSize: "14px" }}>All</option>
                                                            <option value="Available" style={{ fontSize: "14px" }}>Available</option>
                                                            <option value="Out" style={{ fontSize: "14px" }}>Out</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-2" style={{ paddingLeft: "0px" }}>
                                            <br></br>
                                            <button className="btn btn-primary rounded block" type="button" style={{ padding: "15px", fontSize: "11px" }}>Filter</button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" onClick={()=>this.setState({advance:!this.state.advance})} style={{backgroundColor:"white",border:"none"}}><span style={{fontSize:"12px"}}> ADVANCED FILTER</span></button>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    {this.state.advance?
                                    <div className="row">
                                        <form className="form-inline">
                                            <div className="form-group">
                                                <label htmlFor="searchbyname" style={{ fontSize: "14px" }}></label><br />
                                                <div className="col-sm-12">
                                                    <input className="form-control"
                                                        type="text"
                                                        id="searchbyname"
                                                        style={{ border: "none", backgroundImage: `url(${searchicon})`, backgroundRepeat: "no-repeat" }}
                                                        placeholder="     Filter by name"
                                                        onChange={this.handlename}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div style={{ align: "right" }} className="form-group">
                                                <label htmlFor="sort" style={{ fontSize: "12px" }}>Sort by:</label>&nbsp;&nbsp;
                                                <select id="sort" name="sort" className="form-control" onChange={this.handlename}>>
                                                    <option default value="Alphabetical A-Z" style={{ fontSize: "14px"  }}>Alphabetical A-Z</option>
                                                </select>
                                            </div>
                                        </form>
                                        <br/><br/>
                                        </div>:
                                    <div></div>}
                                    <div>
                                        {this.givetable()}
                                    </div>
                                </div>
                            </div>
        </div>
        
        return (
            <div>
                <div className="container-fluid" style={{ margin: '50px',paddingRight:"100px", borderRadius: "5px" }}>
                    <Navbar />
                    {this.state.hide?<div style={{zIndex:1,position:"relative"}}>{big}</div>:
                    <div className="row" style={{zIndex:1,position:"relative"}}>
                        <div className="col-md-8" style={{ paddingRight: "0", paddingBottom: "9999px", marginBottom: "-9999px" }}>
                            {big}
                        </div>

                        <div className="col-md-4" style={{ paddingLeft: "0px" }}>
                            <Info child={this.state.obj} user={this.state.data}/>
                        </div>
                    </div >}
                </div >
            </div >
        )
    }
}

export default Employee;