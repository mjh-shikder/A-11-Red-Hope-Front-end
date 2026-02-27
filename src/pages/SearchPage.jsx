import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { BiSearchAlt2 } from "react-icons/bi";
import useAuthContext from "../hooks/useAuthContext";
import Container from "../components/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";


const SearchPage = () => {
  const { upazilas, districts } = useAuthContext();

  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");
  const [filterdData, setFilteredData] = useState([]);
  
  const axiosInstance = useAxios();

  

  // search function
  const handleSearch = (e) => {
    e.preventDefault();

    const bloodGroup = blood.trim();
    const recipientDistrict = district;
    const recipientUpazila = upazila;

    console.log("boold groupo:", bloodGroup);

    axiosInstance
      .get(
        `/search?bloodGroup=${bloodGroup}&recipientDistrict=${recipientDistrict}&recipientUpazila=${recipientUpazila}`
      )
      .then((res) => {
        console.log(res.data);
        setFilteredData(res.data);
      });
  };

  return (
    <Container>
      <div className="px-1.5  md:px-0">
        <h1 className="text-4xl font-bold text-primary text-center my-5">
          Search Donors
        </h1>
        <form
          onSubmit={handleSearch}
          className="fieldset flex items-center justify-center my-10 "
        >
          {/* <label className="label">Blood Gropu</label> */}
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

        {/* Search Result Donors Lists */}
        <div className="">
          {filterdData.length == 0 && (
            <div className="flex justify-center mt-30 h-screen">
              <h1 className="text-4xl font-bold text-gray-400">Search For Results</h1>
            </div>
          )}
          {filterdData && (
            <div className="flex justify-center mb-20">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Donor Name</th>

                    <th>Location</th>
                    <th>Blood Group</th>
                    
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row  */}
                  {filterdData.map((donor) => (
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={donor.mainPhotoUrl}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{donor.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {donor.district[0].toUpperCase() +
                          donor.district.slice(1)}
                        , {donor.upazila[0].toUpperCase() + donor.upazila.slice(1)}
                      </td>
                      <td>
                        {donor.blood}
                      </td>
                      <td>{donor.email}</td>
                      {/* button below */}
                      {/* <td>
                        <Link className="btn btn-sm btn-accent text-white">
                          View
                        </Link>{" "}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SearchPage;
