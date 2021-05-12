import React, { useState } from 'react'
import { useAuth } from '../utilities/AuthContext'


export default function Login() {
    const { login } = useAuth()
    const [loginData, setLoginData] = useState({})
    const handleChange = e => setLoginData(prevState => ({...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault()
        login(loginData)
        console.log('handleSubmit')
    }

    return (
            <form className="subtext" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input 
                            type="email" 
                            name="username"
                            className="form-control" 
                            placeholder="Enter email"
                            aria-label="email"
                            id="inputEmail3"
                            vaue={loginData.username || ''}  
                            onChange={handleChange}   
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Enter password"
                        aria-label="password"
                        id="inputPassword3" 
                        value={loginData.password || ''}
                        onChange={handleChange}    
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
    );
}
