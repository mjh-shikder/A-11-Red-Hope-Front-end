import React from "react";
import { Quote, Heart, Users } from "lucide-react";
import { Link } from "react-router";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      role: "Blood Recipient",
      message:
        "Red Hope helped me find a donor within hours during an emergency. I will forever be grateful to this amazing community.",
      icon: <Heart className="text-primary" size={28} />,
    },
    {
      name: "Rahim Uddin",
      role: "Regular Donor",
      message:
        "Donating blood through Red Hope is simple and organized. It feels incredible knowing I can save lives so easily.",
      icon: <Users className="text-primary" size={28} />,
    },
    {
      name: "City Care Hospital",
      role: "Medical Partner",
      message:
        "Red Hope has streamlined urgent blood requests for our patients. Their platform makes coordination fast and reliable.",
      icon: <Quote className="text-primary" size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 lg:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold textRed">
          What People Say
        </h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
          Real stories from donors, recipients, and partners who are part of the
          Red Hope community.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-base-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl border border-base-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-base-100 p-3 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold textRed">{item.name}</h3>
                <p className="text-sm textGreen">{item.role}</p>
              </div>
            </div>

            <p className="text-secondary leading-relaxed">“{item.message}”</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 bg-base-200 p-12 rounded-xl text-center shadow-xl">
        <h2 className="text-3xl font-bold textRed mb-4">Share Your Story</h2>
        <p className="max-w-2xl mx-auto text-lg text-secondary">
          Have you donated or received blood through Red Hope? Inspire others by
          sharing your experience with our community.
        </p>
        <Link
          to={"/testimonial"}
          className="btn mt-6 bg-base-100 textRed rounded-xl hover:scale-105 transition-transform"
        >
          Submit Testimonial
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
