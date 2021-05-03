import React from 'react'

export default function validate(values) {
    let errors = {};
    if(!values.email){
        errors.email = 'Email address is required';
    } else if(!/\S+@\S+\.\S/.test(values.email)) {
        errors.email = 'Please enter valid email address';
    }
    return errors;
};
