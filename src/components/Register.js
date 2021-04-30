import React, { useState } from 'react'
import { useAuth } from '../utilities/AuthContext'


export default function Register() {
    const { register } = useAuth()

    const [data, setData] = useState({});
    const handleChange = e => setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const APIpost = e => {
        e.preventDefault()
        register(data)
    }

    return (
        <>
            <div className="register form">
                <form className="row g-3 needs-validation"  onSubmit={APIpost} noValidate>
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" onChange={handleChange} name='first_name' value={data.first_name || ''} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" onChange={handleChange} name='last_name' value={data.last_name || ''} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustomEmail" className="form-label">Email</label>
                        <div className="input-group has-validation">
                            <input type="email" className="form-control" id="validationCustomEmail" aria-describedby="inputGroupPrepend"  onChange={handleChange} name='email' value={data.email || ''} required />
                            <div className="invalid-feedback">
                                Please input valid email format
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="DOB">Date of Birth</label>
                        <input type="date" id="DOB" name="trip-start"
                            min="1900-01-01" max="2002-01-01"  onChange={handleChange} name='date_of_birth' value={data.date_of_birth || ''} requried />    
                        <div className="invalid-feedback">
                            Please select valid date
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} name='password' value={data.password || ''} required />
                        <div className="invalid-feedback">
                            Password must be at least 8 characters long
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
