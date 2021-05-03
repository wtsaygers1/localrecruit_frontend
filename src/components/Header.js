import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">LocalRecruit</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sports</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/sport/spikeball" activeClassName="active">Spike Ball</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/sport/discgolf" activeClassName="active">Disc Golf</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/sport/kanjam" activeClassName="active">Kan Jam</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit"><NavLink to="/register">Register</NavLink></button>
                        <button className="btn btn-outline-success" type="submit"><NavLink to="/login">Login</NavLink></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
