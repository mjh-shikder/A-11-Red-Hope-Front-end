import React from "react";
import { Building2, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

const Partners = () => {
  const partners = [
    {
      name: "City Care Hospital",
      type: "Medical Partner",
      icon: <Building2 className="text-primary" size={36} />,
    },
    {
      name: "LifeLine Blood Bank",
      type: "Blood Bank Partner",
      icon: <HeartHandshake className="text-primary" size={36} />,
    },
    {
      name: "SafeHealth Foundation",
      type: "NGO Partner",
      icon: <ShieldCheck className="text-primary" size={36} />,
    },
    {
      name: "Global Medical Center",
      type: "Hospital Partner",
      icon: <Building2 className="text-primary" size={36} />,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 lg:px-20 py-16 rounded-xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold textRed ">
          Our Trusted Partners
        </h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
          Red Hope collaborates with hospitals, blood banks, and organizations
          to ensure safe and fast blood donation services for those in need.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-base-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl border border-primary/10 text-center hover:animate-pulse"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-base-100 p-4 rounded-xl shadow-md t">
                {partner.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold textRed ">{partner.name}</h3>
            <p className="text-secondary textRed mt-2">{partner.type}</p>
            <div className="mt-4 badge badge-accent badge-outline rounded-xl">
              Verified Partner
            </div>
          </div>
        ))}
      </div>

      {/* Partnership CTA */}
      <div className="mt-20 border border-accent text-accent p-12 rounded-xl text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Join Red Hope’s growing network of trusted institutions and help us
          make blood donation more accessible, reliable, and life-saving.
        </p>
        <Link
          to={"/partner"}
          className="btn bg-base-100 text-accent mt-6 rounded-xl hover:scale-105 transition-transform"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
};

export default Partners;
