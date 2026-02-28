import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { BiSearchAlt2 } from "react-icons/bi";
import useAuthContext from "../hooks/useAuthContext";
import Container from "../components/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import toast from "react-hot-toast";

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
        `/search?bloodGroup=${bloodGroup}&recipientDistrict=${recipientDistrict}&recipientUpazila=${recipientUpazila}`,
      )
      .then((res) => {
        console.log(res.data);
        setFilteredData(res.data);
      });
  };

  return (
    <Container>
      <div className="px-1.5  md:px-0">
        <div
          className=" flex items-center justify-center h-80 bg-cover rounded-xl bg-center hue-rotate-18
         bg-[url(https://images.unsplash.com/photo-1769776399336-37f4d5030f6b?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
        >
          <div className="backdrop-blur-sm brightness-90 rounded-xl md:px-10 md:py-3 ">
            <h1 className="text-4xl font-bold text-white text-center my-5">
              Search Donors
            </h1>
          </div>
        </div>

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
              <h1 className="text-4xl font-bold text-gray-400">
                Search For Results
              </h1>
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
                    <th>Contact</th>
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
                                className="object-center "
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
                        ,{" "}
                        {donor.upazila[0].toUpperCase() +
                          donor.upazila.slice(1)}
                      </td>
                      <td>{donor.blood}</td>
                      <td>{donor.email}</td>

                      {/* Modal button below */}
                      <td>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          className="btn rounded-xl bgGreen text-white "
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
                          Contact Info
                        </button>
                        <dialog id="my_modal_1" className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg text-center textRed ">
                              Contact With Donor
                            </h3>
                            <div className="py-2 flex justify-between items-center border rounded-xl px-5 border-accent gap-2 my-3">
                              <p className="font-bold">{donor.email}</p>
                              <button
                                type="button"
                                className="btn btn-sm rounded-xl bgGreen text-white"
                                onClick={async () => {
                                  try {
                                    await navigator.clipboard.writeText(
                                      donor.email,
                                    );
                                    toast.success("Email copied!");
                                  } catch (err) {
                                    alert("Copy failed");
                                  }
                                }}
                              >
                                Copy
                              </button>
                            </div>
                            <div className="py-2 flex justify-between items-center border rounded-xl px-5 border-accent gap-2">
                              <p className="font-bold">+8801576624878</p>
                              <button
                                type="button"
                                className="btn btn-sm rounded-xl bgGreen text-white"
                                onClick={async () => {
                                  try {
                                    await navigator.clipboard.writeText(
                                      "+8801576624878",
                                    );
                                    toast.success("Phone Number copied!");
                                  } catch (err) {
                                    alert("Copy failed");
                                  }
                                }}
                              >
                                Copy
                              </button>
                            </div>

                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn rounded-xl btn-primary btn-outline ">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </td>
                      {/* --- */}
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
