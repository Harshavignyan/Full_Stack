import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return <div className="maindiv">
        <div className="leftdiv">
            <Link className="navlink" to="home">Home</Link>
        </div>
        <div className="rightdiv">
            <Link className="navlink" to="courses">View Courses</Link>
            <Link className="navlink" to="login">Login</Link>
            <Link className="navlink" to="signup">SignUp</Link>
        </div>
    </div>
}

export default Header;