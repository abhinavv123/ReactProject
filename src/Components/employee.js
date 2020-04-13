import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import blusky from "../blusky.jpeg";
import '../App.css';
//import ReactSearchBox from 'react-search-box';
import searchicon from '../searchicon.png';
import Navbar from './navbar.js';
import Info from './info.js';
import { Link } from 'react-router-dom';

class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            Department: "All",
            Status: "All",
            name: "",
            arr: []
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

    givetable = () => {
        let rows = [];
        for (let i = 0; i < this.state.arr.length; i++) {
            if ((this.state.name === this.state.arr[i].name || this.state.name === "") && (this.state.arr[i].Department === this.state.Department || this.state.Department === "All") && (this.state.Status === "All" || this.state.Status === this.state.arr[i].status) && (this.state.data !== this.state.arr[i])) {
                let varr = null;
                if (this.state.arr[i].status === "Available") {
                    varr = <td  style={{ color: "green" }}>{this.state.arr[i].status}</td>
                }
                else {
                    varr = <td  style={{ color: "red" }}>{this.state.arr[i].status}</td>
                }
                rows.push(
                        <tr key={this.state.arr[i].username}>
                            <td><Link onclick="getColumnValue(this);">Click Me!</Link></td>
                            <td >{this.state.arr[i].name}</td>
                            <td >{this.state.arr[i].Department}</td>
                            <td >{this.state.arr[i].phone}</td>
                            {varr}
                        </tr>
                )
            }
        }
        return (
            <div>
                <table className="table table-striped table-hover ">
                    <thead>
                    <tr >
                        <th >Name</th>
                        <th >Department</th>
                        <th >Phone Number</th>
                        <th >Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>)
    }
    render() {
        return (
            <div>
                <div className="container" style={{ margin: '50px', borderRadius: "5px" }}>
                    <Navbar />
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">

                                    <span style={{ color: "grey" }}> Home&nbsp;
                                        <i className="fa fa-angle-right"></i>
                                            &nbsp;
                                        <b style={{ color: "grey" }}>Employee</b>
                                    </span>

                                    <button className="button1 float-right" type="button" style={{ padding: "5px", borderRadius: "5px", backgroundColor: "white", borderColor: "Dodgerblue" }}>
                                        <b style={{ color: "Dodgerblue" }} >Add Employee +</b>
                                    </button><br /><br/>
                                    <hr/>

                                    <h2 style={{ color: "grey" }}>Employee Directory</h2>

                                    <br />
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="search">Name</label><br />
                                                    <div className="col-sm-12">
                                                        <input className="form-control"
                                                            type="text"
                                                            id="search"
                                                            style={{ border: "none", backgroundImage: `url(${searchicon})`, backgroundRepeat: "no-repeat" }}
                                                            placeholder="     Type in a name..."
                                                            onChange={this.handletable}>
                                                        </input>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-3">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="dept2" >Department</label>
                                                    <div className="col-sm-12">
                                                        <select id="dept2" name="dept2" className="form-control" onChange={this.handletable}>>
                                                        <option default value="All">All</option>
                                                            <option value="Sales">Sales</option>
                                                            <option value="Marketing">Marketing</option>
                                                            <option value="Engineer">Engineer</option>
                                                            <option value="Design">Design</option>
                                                            <option value="Accountant">Accountant</option>
                                                            <option value="Finance">Finance</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-3">
                                            <form >
                                                <div className="form-group">
                                                    <label htmlFor="avail">Availability</label>
                                                    <div className="col-sm-12">
                                                        <select id="avail" name="avail" className="form-control" onChange={this.handletable}>>
                                                        <option default value="All">All</option>
                                                            <option value="Available">Available</option>
                                                            <option value="Out">Out</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-2">
                                            <button className="btn btn-primary rounded btn-lg" type="button" style={{padding:"15px"}}>Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="card-header">

                                    </div>
                                    <hr />
                                    <div className="card-body">
                                        {this.givetable()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <Info/>
                        </div>

                    </div >
                </div >
            </div >
        )
    }
}

export default Employee;