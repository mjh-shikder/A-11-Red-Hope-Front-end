import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { BiSearchAlt2 } from "react-icons/bi";
import useAuthContext from "../hooks/useAuthContext";

const SearchPage = () => {
  const { upazilas, districts } = useAuthContext()

  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");

  const axiosInstance = useAxios();

  const handleSearch = (e) => {
    e.preventDefault();
    
    const bloodGroup = blood.trim()
    const recipientDistrict = district;
    const recipientUpazila = upazila;

      console.log('boold groupo:', bloodGroup);
      
      
    axiosInstance
      .get(
        `/search?bloodGroup=${bloodGroup}&recipientDistrict=${recipientDistrict}&recipientUpazila=${recipientUpazila}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="fieldset flex items-center justify-center my-10 ">
        {/* <label className="label">Blood Gropu</label> */}
        <select
          name="bloodGroup"
          value={blood}
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
        {/* <label className="label">Select District</label> */}
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          name="district"
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
        {/* <label className="label">Select Upazila</label> */}
        <select
          value={upazila}
          onChange={(e) => setUpazila(e.target.value)}
          name="upazila"
          className="select rounded-xl select-bordered focus:outline-0 "
        >
          <option value="">Select Upazila</option>

          {upazilas.map((u) => (
            <option value={u?.name} key={u.id}>
              {u?.name}
            </option>
          ))}
        </select>
        <button className="btn rounded-xl btn-primary text-white ">
          <BiSearchAlt2 size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchPage;
