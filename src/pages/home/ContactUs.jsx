import React from 'react';
import toast from 'react-hot-toast';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const ContactUs = () => {

    const handleConcat = (e) => {
        e.preventDefault()
        toast.success('Massage Sent')
    }

    return (
      <div>
        <section className="bg-base-200 py-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Have questions, need help, or want to get in touch? We’re here
                to support you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-2xl text-primary" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm text-gray-500">+880 1223213333</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-primary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-gray-500">support@redhope.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="text-xl font-semibold mb-4">
                    Send us a message
                  </h3>

                  <form onSubmit={handleConcat} className="space-y-4  ">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full focus:outline-0"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full focus:outline-0"
                      required
                    />

                    <textarea
                      placeholder="Your Message"
                      className="textarea textarea-bordered w-full focus:outline-0"
                      rows="4"
                      required
                    ></textarea>

                    <button className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ContactUs;