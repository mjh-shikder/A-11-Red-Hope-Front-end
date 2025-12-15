import React, { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

const Register = () => {
  const { user, setUser, showPassword, setShowPassword, createUser } =
    useAuthContext();

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('')
  const [upazila, setUpazila] = useState('')

  const axiosInstance = useAxios();
  // console.log(user);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("./upazila.json")
      .then(res => {
        // console.log(res.data.upazilas);
        setUpazilas(res.data.upazilas);
      })
    
    axios.get('./district.json')
      .then(res => {
        // console.log(res.data.districts);
        setDistricts(res.data.districts);
      
    })
  }, []);

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
    const bloodGroup = e.target.bloodGroup.value;

    console.log(bloodGroup);

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
      bloodGroup,
      district,
      upazila,
    };

    console.log(formData);
    // return
   
    

    if (res.data.success == true) {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: mainPhotoUrl,
          });
          setUser(user);
          axiosInstance
            .post("/users", formData)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              toast.error(err);
            });
          toast.success("Registration Complete");
          e.target.reset(); //later added
          navigate(location.state ? location.state : "/");
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
            <input type="file" className="input rounded-xl  " name="picture" />
            {/* Blood Group */}
            <label className="label">Blood Gropu</label>
            <select
              name="bloodGroup"
              defaultValue="Choose Blood Group"
              className="select rounded-xl select-bordered "
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
              name="bloodGroup"
              className="select rounded-xl select-bordered "
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
              name="bloodGroup"
              className="select rounded-xl select-bordered "
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
              className="input rounded-xl"
              name="password"
              placeholder="Password"
            />
            <button
              className=" absolute top-80 right-7"
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
