import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const { user, setUser, showPassword, setShowPassword, createUser } =
    useAuthContext();

  console.log(user);

  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // email password registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const picture = e.target.picture;
    const file = picture.files[0];

    // console.log(file);

    // passwords validation
    if (password.length < 5) {
      toast.error("Password must be at last 6 Charecters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=182d20cdf18c4b37df6e1764dedce44a`,
      { image: file },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

      const mainPhotoUrl = res.data.data.display_url;
      
      const formData = {
          email, 
          name,
          mainPhotoUrl,
          password,
      }

    if (res.data.success == true) {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: mainPhotoUrl,
          });
          setUser(user);
            axios.post('http://localhost:5000/users', formData)
                .then(res => {
                console.log(res.data);
                
                })
                .catch(err => {
                toast.error(err)
            })
          toast.success("Registration Successful");
          e.target.reset(); //later added
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40 mb-40">
      <div className="card-body">
        <h1 className="text-3xl text-primary font-bold text-center">
          Register Now!
        </h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset relative">
            {/* Name Feild */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input rounded-xl"
              name="name"
              placeholder="Your Name"
            />
            {/* Email Feild */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input rounded-xl"
              name="email"
              placeholder="Email"
            />
            {/* Photo url */}
            <label className="label">Picture</label>
            <input
              type="file"
              className="input rounded-xl"
              name="picture"
              placeholder="Live link of your photo"
            />
            {/* Password Feild */}
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input rounded-xl"
              name="password"
              placeholder="Password"
            />
            <button
              className=" absolute top-62 right-6"
              onClick={handleShowHidePassword}
            >
              {showPassword ? (
                <VscEye size={22}></VscEye>
              ) : (
                <VscEyeClosed size={22}></VscEyeClosed>
              )}
            </button>
            <div></div>
            <button className="btn btn-primary mt-4 rounded-xl">
              Register
            </button>
          </fieldset>
        </form>

        <p>
          Already Have an Accoutn? Then{" "}
          <Link className="text-secondary hover:underline " to={"/login"}>
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
