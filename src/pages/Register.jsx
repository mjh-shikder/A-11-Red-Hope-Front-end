import React, { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";
import Loader from "./Loader";

const Register = () => {
  const {
    setUser,
    showPassword,
    setShowPassword,
    createUser,
    districts,
    setDistricts,
    upazilas,
    setUpazilas,
  } = useAuthContext();

  
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");
  const [error, setError] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const axiosInstance = useAxios();
  // console.log(user);

  const location = useLocation();
  const navigate = useNavigate();
  const {user} = useAuthContext()
  useEffect(() => {
    axios.get("./upazila.json").then((res) => {
      // console.log(res.data.upazilas);
      setUpazilas(res.data.upazilas);
    });

    axios.get("./district.json").then((res) => {
      // console.log(res.data.districts);
      setDistricts(res.data.districts);
    });
  }, [setDistricts, setUpazilas]);

  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // email password registration
  const handleRegister = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = e.target.name.value;
    const email = e.target.email.value;
    // const password = e.target.password.value;
    const picture = e.target.picture;
    const file = picture.files[0];
    const bloodGroup = e.target.bloodGroup.value;

    console.log(bloodGroup);

    // console.log(file);

    // passwords validation
    if (passowrd.length < 5) {
      setError("Password must be at last 6 Charecters");
      return;
    }

    if (!/[A-Z]/.test(passowrd)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(passowrd)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (passowrd !== confirmPassword) {
      setError("Password Doesn't Match");
      return
    }
    setError("");
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=182d20cdf18c4b37df6e1764dedce44a`,
        { image: file },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success !== true) {
        toast.error("Image upload failed");
        return;
      }

      const mainPhotoUrl = res.data.data.display_url;

      const formData = {
        email,
        name,
        mainPhotoUrl,
        passowrd,
        blood,
        district,
        upazila,
      };

      console.log(formData);

      const userRes = await createUser(email, passowrd);
      const user = userRes.user;

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: mainPhotoUrl,
      });

      setUser(user);
      await axiosInstance.post("/users", formData);

      toast.success("Registration Complete");
      e.target.reset(); //later added
      navigate(location.state ? location.state : "/");
    } catch (error) {
      toast.error(error?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (user) return (
    <div className="text-4xl font-semibold min-h-dvh flex flex-col  items-center justify-center ">
      <div className="bgRed flex flex-col items-center justify-center space-y-5  px-10 py-5 rounded-xl text-white">

      <h1>Thank You!</h1> 
      <h1>You Have Already Registerd</h1>
      </div>
    </div>
  );
  if(isSubmitting) return <Loader></Loader>
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40 mb-40">
      <div className="card-body">
        <h1 className="text-3xl text-primary font-bold text-center">
          Register Now!
        </h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset relative" disabled={isSubmitting}>
            {/* Name Feild */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input rounded-xl focus:outline-0"
              name="name"
              placeholder="Your Name"
              required
            />
            {/* Email Feild */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input rounded-xl focus:outline-0"
              name="email"
              placeholder="Email"
              required
            />
            {/* Photo url */}
            <label className="label">Picture</label>
            <input
              type="file"
              className="input rounded-xl focus:outline-0 "
              name="picture"
              required
            />
            {/* Blood Group */}
            <label className="label">Blood Gropu</label>
            <select
              name="bloodGroup"
              value={blood}
              required
              onChange={(e) => setBlood(e.target.value)}
              className="select rounded-xl select-bordered focus:outline-0"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {/* Select District */}
            <label className="label">Select District</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              name="district"
              required
              className="select rounded-xl select-bordered focus:outline-0 "
            >
              <option value="">Select District</option>

              {districts.map((d) => (
                <option value={d?.name} key={d.id}>
                  {d?.name}
                </option>
              ))}
            </select>
            {/* Select Upazilas */}
            <label className="label">Select Upazila</label>
            <select
              value={upazila}
              onChange={(e) => setUpazila(e.target.value)}
              name="upazila"
              required
              className="select rounded-xl select-bordered focus:outline-0 "
            >
              <option value="">Select Upazila</option>

              {upazilas.map((u) => (
                <option value={u?.name} key={u.id}>
                  {u?.name}
                </option>
              ))}
            </select>

            {/* Password Feild */}
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input rounded-xl focus:outline-0"
              name="password"
              placeholder="Password"
              value={passowrd}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className=" absolute top-114 right-7"
              type="button"
              onClick={handleShowHidePassword}
            >
              {showPassword ? (
                <VscEye size={22}></VscEye>
              ) : (
                <VscEyeClosed size={22}></VscEyeClosed>
              )}
            </button>
            {/* Confirm Password Feild */}
            <label className="label">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input rounded-xl focus:outline-0"
              name="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className=" absolute top-132 right-7"
              type="button"
              onClick={handleShowHidePassword}
            >
              {showPassword ? (
                <VscEye size={22}></VscEye>
              ) : (
                <VscEyeClosed size={22}></VscEyeClosed>
              )}
            </button>
            <p className="text-primary">{error}</p>
            <button
              className={`btn btn-primary mt-4 rounded-xl ${isSubmitting ? "loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering" : "Register"}
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
