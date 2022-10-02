import React from "react";
import { Link } from "react-router-dom";
import '../scss/components/logo.css';

function Logo() {
    return (
        <Link to='/'>
        <div className="logo-container">
            <div className="black-square">
                <div className="yellow-square">
                    <p className="letters">PH</p>
                </div>
            </div>
            <div className="text-logo">
                PHONE HELPER
            </div>
        </div>
        </Link>
    );
}

export default Logo;