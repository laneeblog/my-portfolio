import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navigation() {
    return <div className="navigation">
        <Link to="/about" className="link">About</Link>
        <Link to="/development" className="link">Development</Link>
        <Link to="/others" className="link">Others</Link>
        <Link to="/careers" className="link">Careers</Link>
        <Link to="/contact" className="link">Contact</Link>
    </div>
}

export default Navigation;