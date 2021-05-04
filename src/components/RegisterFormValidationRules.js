import React from 'react'

export default function validate(values) {
    let errors = {};
    if(!values.email){
        errors.email = 'Email address is required';
    } else if(!/\S+@\S+\.\S/.test(values.email)) {
        errors.email = 'Please enter valid email address';
    }
    if(!values.password){
        errors.password = 'Password is required'
    } else if(values.password.length < 8){
        errors.password = 'Password must be 8 or more characters';
    }
    if(!values.first_name){
        errors.first_name = 'First name is required';
    }
    if(!values.last_name){
        errors.last_name = 'Last name is required';
    }
    if(!values.date_of_birth){
        errors.date_of_birth = 'Valid date required';
    }
    return errors;
};
