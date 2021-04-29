import React from 'react'


export default function Register() {

// Example starter JavaScript for disabling form submissions if there are invalid fields
function validate() {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

    return (
        <>
            <div className="register form">
                <form class="row g-3 needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationCustomEmail" class="form-label">Email</label>
                        <div class="input-group has-validation">
                            <input type="email" class="form-control" id="validationCustomEmail" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please input valid email format
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="DOB">Date of Birth</label>
                        <input type="date" id="DOB" name="trip-start"
                            min="1900-01-01" max="2002-01-01" requried />    
                        <div class="invalid-feedback">
                            Please select valid date
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required />
                        <div class="invalid-feedback">
                            Password must be at least 8 characters long
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
