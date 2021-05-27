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
                </div>
            </nav>
        </div>
    )
}