// The registration page for the application
import React from 'react';

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          First name:
          <input type="text" name="firstname" placeholder='First Name'/>
        </label>
        <br />
        <label>
          Last name:
          <input type="text" name="lastname" placeholder='Last Name'/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" placeholder='Password'/>
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" placeholder='Confirm Password'/>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;