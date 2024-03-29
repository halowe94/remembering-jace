import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return(
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class='container'> 
                    <Link class="navbar-brand">
                        Remembering Jace Wbsite
                    </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                            class={`nav-item ${props.location.pathname === "/" ? "active" : ""}`}>
                            <Link class="nav-link" to="/">
                                Home
                            </Link>
                            </li>
                            <li
                            class={`nav-item ${
                                props.location.pathname === "/about" ? "active" : ""
                            }`}
                            >
                                <Link class="nav-link" to="about">
                                    About
                                </Link>
                            </li>
                            <li
                            class={`nav-item ${
                                props.locatiion.pathname === "/contact" ? "active" : ""
                            }`}
                            >
                                <Link class="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter;