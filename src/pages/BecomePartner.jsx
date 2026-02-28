import React from 'react';
import Container from '../components/Container';
import { Building2, Handshake, ShieldCheck } from "lucide-react";

const BecomePartner = () => {
    return (
      <div>
        <Container>
          <div className="min-h-screen bg-base-100 text-base-content px-6 lg:px-20 py-16">
            {/* Header Section */}
            <div className="text-center mb-14">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-xl shadow-md">
                  <Handshake className="text-primary" size={36} />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Become a Partner
              </h1>
              <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                Join Red Hope’s trusted network of hospitals, blood banks, and
                organizations working together to save lives and strengthen our
                community.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-base-200 p-8 rounded-xl shadow-lg text-center">
                <Building2 className="text-accent mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Expand Your Reach
                </h3>
                <p className="text-secondary">
                  Connect with a large donor network and respond faster to
                  urgent blood requests.
                </p>
              </div>

              <div className="bg-base-200 p-8 rounded-xl shadow-lg text-center">
                <ShieldCheck className="text-accent mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Trusted Collaboration
                </h3>
                <p className="text-secondary">
                  Work within a secure and verified ecosystem designed for
                  safety and transparency.
                </p>
              </div>

              <div className="bg-base-200 p-8 rounded-xl shadow-lg text-center">
                <Handshake className="text-accent mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Social Impact
                </h3>
                <p className="text-secondary">
                  Strengthen your organization’s community contribution and help
                  save more lives.
                </p>
              </div>
            </div>

            {/* Partner Application Form */}
            <div className="max-w-4xl mx-auto bg-base-200 p-10 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Partnership Application
              </h2>

              <form className="grid md:grid-cols-2 gap-6">
                {/* Organization Name */}
                <div>
                  <label className="label">
                    <span className="label-text text-primary font-semibold">
                      Organization Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter organization name"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="label">
                    <span className="label-text text-primary font-semibold">
                      Contact Person
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter contact person name"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label">
                    <span className="label-text text-primary font-semibold">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="label">
                    <span className="label-text text-primary font-semibold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Organization Type */}
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="label-text text-primary font-semibold">
                      Organization Type
                    </span>
                  </label>
                  <select className="select select-bordered w-full rounded-xl">
                    <option>Hospital</option>
                    <option>Blood Bank</option>
                    <option>NGO</option>
                    <option>Healthcare Organization</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="label-text text-primary font-semibold">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full rounded-xl h-32"
                    placeholder="Tell us about your organization and how you'd like to collaborate..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-xl px-10"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default BecomePartner;