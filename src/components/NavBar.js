import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    render() {
        return (
            <div className="nav-container">
                <div className="nav-item-container">
                    <Link to="/" className="logo">Keith</Link>
                    <div className="nav-item">
                        <Link to="/about" className="nav-link current">About</Link>
                        <Link to="/projects" className="nav-link">Work</Link>
                        <a href={`mailto:keithpacana@berkeley.edu`}className="nav-link">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}