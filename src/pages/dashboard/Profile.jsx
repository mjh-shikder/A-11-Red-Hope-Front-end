import React, { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import Container from "../../components/Container";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

const Profile = () => {
  const {
    user,
    showPassword,
    setShowPassword,
    createUser,
    districts,
    setDistricts,
    upazilas,
    setUpazilas,
    userDb,
  } = useAuthContext();

    console.log(userDb);
    console.log(user);
    
    
  
  const [clicked, setClicked] = useState(false);
  const [editBtnclicked, seteditBtnclicked] = useState(true);
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");
  const axiosInstance = useAxios();

   

  // Handle submit button function
  const handleSubmit = async (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const picture = e.target.picture;
    const file = picture.files[0];
    const bloodGroup = e.target.bloodGroup.value;

    const res = await axios
      .post(
        `https://api.imgbb.com/1/upload?key=182d20cdf18c4b37df6e1764dedce44a`,
        { image: file },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .catch((err) => console.log(err));

    const mainPhotoUrl = res.data.data.display_url;

    const formData = {
      email,
      name,
      mainPhotoUrl,
      blood,
      district,
      upazila,
    };

    console.log(formData);
  };

  const handleUpdateProfile = () => {
      setClicked(!clicked);
      seteditBtnclicked(!editBtnclicked)
  };

  return (
    <Container>
      <div className="flex justify-center items-center ">
        <div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-primary text-center">
              {user?.displayName}'s Profile
            </p>
          </div>
          {clicked ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row  md:gap-5">
                <fieldset className="fieldset relative ">
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
                </fieldset>
                <fieldset className="fieldset relative ">
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
                </fieldset>
              </div>
              <button className="btn btn-primary mt-4 w-full rounded-xl">
                Update
              </button>
            </form>
          ) : (
            //   will show when is not editable
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row  md:gap-5">
                <fieldset className="fieldset relative ">
                  {/* Name Feild */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input rounded-xl cursor-default focus:outline-0 "
                    name="name"
                    placeholder="Your Name"
                    value={user?.displayName}
                  />
                  {/* Email Feild */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input rounded-xl focus:outline-0 cursor-default"
                    name="email"
                    placeholder="Email"
                    value={user?.email}
                  />
                  {/* Photo url */}
                  <label className="label">Picture</label>
                  <input
                    type="text"
                    className="input rounded-xl focus:outline-0 cursor-default"
                    name="picture"
                    value={userDb.mainPhotoUrl}
                  />
                </fieldset>
                <fieldset className="fieldset relative ">
                  {/* Blood Group */}
                  <label className="label">Blood Gropu</label>
                  <input
                    type="text"
                    className="input rounded-xl focus:outline-0 cursor-default"
                    name="name"
                    placeholder="Your Name"
                    value={userDb.blood}
                  />
                  {/* Select District */}
                  <label className="label">Select District</label>
                  <input
                    type="text"
                    className="input rounded-xl focus:outline-0 cursor-default"
                    name="name"
                    placeholder="Your Name"
                    value={userDb.district}
                  />
                  {/* Select Upazilas */}
                  <label className="label">Select Upazila</label>
                  <input
                    type="text"
                    className="input rounded-xl focus:outline-0 cursor-default"
                    name="name"
                    placeholder="Your Name"
                    value={userDb.upazila}
                  />
                </fieldset>
              </div>
              {/* <button className="btn btn-primary mt-4 w-full rounded-xl">
                Update
              </button> */}
            </form>
          )}
          {editBtnclicked ? (
            <button
              onClick={handleUpdateProfile}
              className="btn btn-primary mt-4 w-full rounded-xl"
            >
              Edit Profile
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
