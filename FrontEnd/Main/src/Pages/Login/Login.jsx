// The login page for the application
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import People from '../../assets/People.png'
import './Login.css';

function Login() {
    // TODO:
    // 1)Connect to the REGISTER page
    const navigate = useNavigate();
    // function handleRegister(){
    //     navigate('/register');
    // }

  return (
    <div className='LogIn'>
        <div className="sideImage">
            <img src={People} id='loginIMG' />
        </div>
      <div className="LoginForm">
        <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          Remember Me:
          <input type="checkbox" name="rememberMe" />
        </label>
        <br />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
        <p><a href="/forgot-password">Forgot Password?</a></p>
      </form>
      </div>
    </div>
  );
}
export default Login;