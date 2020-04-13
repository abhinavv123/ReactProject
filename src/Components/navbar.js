import React from 'react';
import { Link } from 'react-router-dom';
import blusky from "../blusky.jpeg";
import '../App.css';
import searchicon from '../searchicon.png';

class Navbar extends React.Component{
    render()
    {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light navbar-light" style={{ borderRadius: "5px" }}>
                        <Link to="/" className="navbar-brand"><img className="inline-block rounded-circle" src={blusky} alt="Logo" style={{ height: "25px", width: "25px" }} ></img></Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/employee" className="nav-link" >Home</Link>
                                </li>

                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn nav-link">News&nbsp;
                                            <i className="fa fa-angle-down"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            <Link to="/employee" className="nav-link">National</Link>
                                            <Link to="/employee" className="nav-link">International</Link>
                                            <Link to="/employee" className="nav-link">Sports</Link>
                                            <Link to="/employee" className="nav-link">Business</Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link to="/employee" className="nav-link">Events</Link>
                                </li>

                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn nav-link">Department&nbsp;
                                        <i className="fa fa-angle-down"></i></button>
                                        <div className="dropdown-content">
                                            <Link to="/employee" className="nav-link">Sales</Link>
                                            <Link to="/employee" className="nav-link">Marketing</Link>
                                            <Link to="/employee" className="nav-link">Engineer</Link>
                                            <Link to="/employee" className="nav-link">Design</Link>
                                            <Link to="/employee" className="nav-link">Accounting</Link>
                                            <Link to="/employee" className="nav-link">Finance</Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link to="/employee" className="nav-link">Documents</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/employee" className="nav-link"><span style={{ color: "Dodgerblue" }}>Employees</span></Link>
                                </li>

                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <input type="text" name="search" className="nav-link" style={{ border: "none", backgroundImage: `url(${searchicon})`, backgroundRepeat: "no-repeat" }} placeholder="       Search...">
                                    </input>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" type="button" style={{ border: "none", backgroundColor: "white" }}>
                                        <i className="fa fa-bell">
                                            <span className="badge" style={{ verticalAlign: "top", horizontalAlign: "right" }}>5</span>
                                        </i>
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <span className="nav-link">
                                        <img className="inline-block rounded-circle" src={blusky} alt="Logo" style={{ height: "25px", width: "25px" }} ></img>
                                        &nbsp;<i className="fa fa-angle-down"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </nav>
            </div>
        )
    }
}

export default Navbar;