import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create a Crewmate</Link>
                </li>
                <li>
                    <Link to="/gallery">Crewmate Gallery</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;