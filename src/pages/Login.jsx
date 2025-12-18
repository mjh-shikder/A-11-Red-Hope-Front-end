import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import toast from 'react-hot-toast';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Login = () => {

    const { userLogin,  showPassword, setShowPassword, setTypedEmail } = useAuthContext()

    const [error, setError] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location);


  // Show and Hide Password 
  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

    
    // login function
    const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({email, password});

    userLogin(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((error) => {
        toast.error(error.message, error.code);
        setError(error.message)
      });
  };

    return (
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
        <div className="card-body">
          <h1 className="text-3xl text-secondary font-bold text-center">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset relative">
              {/* Email Feild */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input rounded-xl focus:outline-0"
                name="email"
                placeholder="Email"
                onChange={(e) => setTypedEmail(e.target.value)}
              />
              {/* Password Feild */}
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="input rounded-xl focus:outline-0"
                name="password"
                placeholder="Password"
              />
              <button
                className=" absolute top-27 right-6"
                onClick={handleShowHidePassword}
              >
                {showPassword ? (
                  <VscEye size={22}></VscEye>
                ) : (
                  <VscEyeClosed size={22}></VscEyeClosed>
                )}
              </button>
              <div>
                <Link
                  to={"/forget-password"}
                  className="link link-hover text-secondary"
                >
                  Forgot password?
                </Link>
                {error && <p className="text-primary">{error}</p>}
              </div>
              <button className="btn btn-secondary mt-4 rounded-xl">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            Don't Have an Accout? Then{" "}
            <Link className="text-primary  hover:underline" to={"/register"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Login;