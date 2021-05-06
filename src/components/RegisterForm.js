import { useAuth } from '../utilities/AuthContext'
import validate from './RegisterFormValidationRules'
import useForm from './useForm'


export default function Register() {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(callAPI, validate);

    const { register } = useAuth()

    function callAPI() {
        console.log('No errors, submit callback called!');
        register(values)
    }

    return (
        <div className="register form">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="validationCustom01" className="form-label">First Name</label>
                    <input className={`form-control ${values.first_name && 'is-valid'} ${!!errors.first_name && 'is-invalid'}`} 
                    type="text" 
                    id="validationCustom01" 
                    onChange={handleChange} 
                    name='first_name' 
                    value={values.first_name || ''} 
                    required 
                    />
                    <div className="invalid-feedback">
                            {errors.first_name}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationCustom02" className="form-label">Last Name</label>
                    <input className={`form-control ${values.last_name && 'is-valid'} ${!!errors.last_name && 'is-invalid'}`} 
                    type="text" 
                    id="validationCustom02" 
                    onChange={handleChange} 
                    name='last_name' 
                    value={values.last_name || ''} 
                    required      
                    />
                    <div className="invalid-feedback">
                            {errors.last_name}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationCustomEmail" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input className={`form-control ${values.email && 'is-valid'} ${!!errors.email && 'is-invalid'}`} 
                        id="validationCustomEmail" 
                        placeholder="example@email.com" 
                        aria-describedby="inputGroupPrepend" 
                        onChange={handleChange} name='email' 
                        value={values.email || ''} 
                        type="email"
                        required 
                        />
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="DOB">Date of Birth</label>
                    <input className={`form-control ${values.date_of_birth && 'is-valid'} ${!!errors.date_of_birth && 'is-invalid'}`}
                    type="date" 
                    id="DOB" 
                    name="trip-start"
                    min="1900-01-01" max="2011-01-01" 
                    onChange={handleChange} 
                    name='date_of_birth' 
                    value={values.date_of_birth || ''} 
                    required
                    />
                    <div className="invalid-feedback">
                            {errors.date_of_birth}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input className={`form-control ${values.password && 'is-valid'} ${!!errors.password && 'is-invalid'}`}
                    type="password" 
                    id="exampleInputPassword1" 
                    placeholder="must be at least 8 characters" 
                    onChange={handleChange} 
                    name='password' 
                    value={values.password || ''} 
                    required
                    />
                    <div className="invalid-feedback">
                            {errors.password}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
