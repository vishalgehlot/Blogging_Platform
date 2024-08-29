import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signin", { email, password });
      console.log("Response Data ", response.data);
      console.log("Sign In Response...........");
      console.log(response.token);
      console.log(response);
      if (response.status === 200) {
        const { token, user } = response.data;

        if (token) {
          localStorage.setItem("authToken", token);
          localStorage.setItem("currentUser", email);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userId", user._id);

          toast.success("Sign in successful!");
          navigate("/");
        } else {
          toast.error("No token received. Sign in failed.");
        }
      } else {
        toast.error("Sign in failed");
      }
    }
    catch (err) {
      if (err.response.status === 401) {
        console.log("ERRRORRRRRRRRR");
        console.log(err.response);
        console.log(err.response.status);

        toast.error("Unauthorized: Incorrect email or password.");
      } else {
        toast.error("Sign in failed: Unable to connect to server.");
      }
      console.error("Sign in error:", err);
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="signin-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        marginLeft: '30%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom, #6f42c1 0%, #007bff 100%)',
        color: 'white',
        maxWidth: '580px',
        width: '90%',
        textAlign: 'center'
      }}>
        <h2>Welcome to Blogging Platform</h2>
        <p>Welcome back to Blogging Platform! Log in to continue sharing and discovering great content. Your next post, comment, or connection is just a login away.</p>

        <div className="form-container" style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '500px',
          marginTop: '20px'
        }}>
          <h2 style={{
            color: '#007BFF',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>Sign In</h2>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', color: '#333', marginBottom: '5px', marginRight: '100%' }}>Email</label>
            <input
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder='Enter your email'
              className='form-control'
              style={{
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', color: '#333', marginBottom: '5px', marginRight: '100%' }}>Password</label>
            <input
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder='Enter your password'
              className='form-control'
              style={{
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div className="form-group" style={{ textAlign: 'center' }}>
            <button
              onClick={signIn}
              className='btn btn-primary'
              style={{
                backgroundColor: '#007BFF',
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                border: 'none',
                marginTop: '20px'
              }}
            >
              Sign In
            </button>
            <div style={{ marginTop: '10px' }}>
              <Link to='/signup' style={{ color: '#6447C7', textDecoration: 'none' }}>
                Don't have an account? Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
