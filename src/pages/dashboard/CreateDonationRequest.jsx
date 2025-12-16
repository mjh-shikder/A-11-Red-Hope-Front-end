import React, { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import axios from "axios";

const CreateDonationRequest = () => {
  const { user, upazilas, setUpazilas, districts, setDistricts } =
    useAuthContext();
  console.log(user);

  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [blood, setBlood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const requesterName = form.requesterName.value;
    const requesterEmail = form.requesterEmail.value;
    const recipientName = form.recipientName.value;
    const recipientDistrict = district;
    const recipientUpazila = upazila;
    const hospitalName = form.hospitalName.value;
    const fullAddress = form.fullAddress.value;
    const bloodGroup = blood;
    const donationDate = form.donationDate.value;
    const donationTime = form.donationTime.value;
    const requestMessage = form.requestMessage.value;

    const formData = {
      requesterName,
      requesterEmail,
      recipientName,
      recipientDistrict,
      recipientUpazila,
      hospitalName,
      fullAddress,
      bloodGroup,
      donationDate,
      donationTime,
      requestMessage,
      };

      console.log(formData);
      
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-primary text-center">
        Create Donation Request
      </h2>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className=" space-y-4">
          {/* Requester Name */}
          <label className="label block">Requester Name</label>
          <input
            type="text"
            name="requesterName"
            placeholder="Requester Name"
            value={user?.displayName}
            className="input md:w-10/12 focus:outline-0 text-gray-500 rounded-xl"
            readOnly
          />
          {/* Requester Email */}
          <label className="label block">Requester Email</label>
          <input
            type="email"
            name="requesterEmail"
            placeholder="Requester Email"
            value={user?.email}
            className="input md:w-10/12 focus:outline-0 text-gray-500 rounded-xl "
            readOnly
          />
          {/* Recipient Name */}{" "}
          <label className="label block">Recipient Name</label>
          <input
            type="text"
            name="recipientName"
            placeholder="Recipient Name"
            className="input md:w-10/12 focus:outline-0 rounded-xl"
            required
          />
          {/* Recipient District */}
          <label className="label block">Recipient District</label>
          <select
            name="recipientDistrict"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="input md:w-10/12 focus:outline-0 select rounded-xl"
            required
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option value={d?.name}>{d?.name}</option>
            ))}
          </select>
          {/* Recipient Upazila */}
          <label className="label block">Recipient Upazila</label>
          <select
            value={upazila}
            onChange={(e) => setUpazila(e.target.value)}
            name="recipientUpazila"
            required
            className="select rounded-xl select-bordered "
          >
            <option value="">Select Upazila</option>

            {upazilas.map((u) => (
              <option value={u?.name} key={u.id}>
                {u?.name}
              </option>
            ))}
          </select>
          {/* Hospital Name */}
          <label className="label block">Recipient Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            placeholder="Hospital Name (e.g. Dhaka Medical College Hospital)"
            className="input md:w-10/12 focus:outline-0 rounded-xl"
            required
          />
          {/* Full Address */}
          <label className="label block">Recipient Full Address</label>
          <input
            type="text"
            name="fullAddress"
            placeholder="Full Address (e.g. Zahir Raihan Rd, Dhaka)"
            className="input md:w-10/12 focus:outline-0 rounded-xl"
            required
          />
          {/* Blood Group */}
          <label className="label block">Blood Group</label>
          <select
            name="bloodGroup"
            className="input select md:w-10/12 focus:outline-0 rounded-xl"
            value={blood}
            onChange={(e) => setBlood(e.target.value)}
            required
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
          {/* Donation Date */}
          <label className="label block">Donation Date</label>
          <input
            type="date"
            name="donationDate"
            className="input md:w-10/12 focus:outline-0 rounded-xl"
            required
          />
          {/* Donation Time */}
          <label className="label block">Donation Time</label>
          <input
            type="time"
            name="donationTime"
            className="input md:w-10/12 focus:outline-0 rounded-xl"
            required
          />
          {/* Request Message */}
          <label className="label block">Request Message</label>
          <textarea
            name="requestMessage"
            placeholder="Write details about why blood is needed..."
            className="input h-32 md:w-10/12 focus:outline-0 rounded-xl"
            required
          />
          {/* Submit Button */}
          <button className="md:w-10/12 w-full py-3 rounded-lg bg-primary hover:bg-secondary text-white font-medium ">
            Request Blood Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDonationRequest;
