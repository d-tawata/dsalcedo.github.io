import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <div className="row">
                    <h1 className="mx-auto col-auto display-1">DIANA SALCEDO-PIERCE</h1>
                </div>

                <ul className="nav nav-tabs justify-content-center my-3">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/projects">
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}