import React from 'react';
import Container from '../../components/Container';
import { MessageSquareHeart } from "lucide-react";
const TestimonilaPage = () => {
    return (
      <div className="min-h-screen">
        <Container>
          <div className="min-h-screen bg-base-100 text-base-content px-6 lg:px-20 py-16">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="bg-base-200 p-4 rounded-xl shadow-md">
                  <MessageSquareHeart className="text-primary" size={36} />
                </div>
              </div>
              <h1 className="text-4xl font-bold textRed">
                Share Your Experience
              </h1>
              <p className="mt-4 text-secondary max-w-2xl mx-auto">
                Your story can inspire others to donate and save lives. Tell us
                about your journey with Red Hope.
              </p>
            </div>

            {/* Form Section */}
            <div className="max-w-3xl mx-auto bg-base-200 p-10 rounded-xl shadow-xl">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold textRed">
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full rounded-xl focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold textGreen">
                      Your Role
                    </span>
                  </label>
                  <select className="select select-bordered w-full rounded-xl focus:outline-none focus:border-green-500">
                    <option>Blood Donor</option>
                    <option>Blood Recipient</option>
                    <option>Volunteer</option>
                    <option>Hospital Partner</option>
                  </select>
                </div>

                {/* Testimonial Message */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold textRed">
                      Your Story
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full rounded-xl h-32 focus:outline-none focus:border-green-500"
                    placeholder="Write your experience here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="btn bg-base-100 textRed border border-base-300 rounded-xl px-8 hover:scale-105 transition-transform"
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Encouragement */}
            <div className="mt-16 text-center">
              <p className="text-secondary">Together, we create hope. 💚</p>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default TestimonilaPage;