import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../utilities/AuthContext';

export default function Header(props) {
    const { token, logout } = useAuth()
    const handleSubmit = e => {
        e.preventDefault()
        logout()
        console.log('successful logout')
    }
    const mapSportLinks = props.sports.map((sport, index) => {
        return <li key={index}><NavLink className="dropdown-item" to={`/sport/${sport.url}`} activeClassName="active">{sport.name}</NavLink></li>
    })
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Sports Ball</NavLink>
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
                                {mapSportLinks}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        {!token && <button className="btn btn-outline-success" type="submit"><NavLink to="/register">Register</NavLink></button>}
                        {!token && <button className="btn btn-outline-success" type="submit"><NavLink to="/login">Login</NavLink></button>}
                        {token && <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}><NavLink to="/">Logout</NavLink></button>}
                    </form>
                </div>
            </div>
        </nav>
    );
}
