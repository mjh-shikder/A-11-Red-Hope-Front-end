import React from "react";
import { HeartHandshake, Droplet, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="hero  text-primary-content py-20 bg-[url(https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
        <div className="hero-content text-center backdrop-blur-xl rounded-xl  ">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-primary font-bold ">About Red Hope</h1>
            <p className="py-6 text-lg text-gray-800 ">
              Connecting heroes with those in need. Red Hope is a blood donation
              platform dedicated to saving lives by making blood donation
              simple, fast, and accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold">Red Hope</span>, our mission is
              to bridge the gap between blood donors and patients in urgent
              need. We aim to build a reliable and compassionate community where
              every donation counts and every drop saves a life.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="p-10 bg-gray-100 rounded-xl  shadow-xl">
              <Droplet size={120} className="text-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-base-200 py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body items-center text-center">
              <HeartHandshake size={40} className="text-primary mb-4" />
              <h3 className="card-title">Compassion</h3>
              <p>
                We believe in humanity and the power of kindness. Every donor is
                a hero making a life-saving difference.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body items-center text-center">
              <Users size={40} className="text-primary mb-4" />
              <h3 className="card-title">Community</h3>
              <p>
                We connect donors, recipients, and hospitals into one unified
                network built on trust and care.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body items-center text-center">
              <ShieldCheck size={40} className="text-primary mb-4" />
              <h3 className="card-title">Safety</h3>
              <p>
                We prioritize secure data handling and verified requests to
                ensure safe and reliable blood donations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Be Someone’s Hope Today</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Your small act of donating blood can save multiple lives. Join Red
          Hope and become part of a growing movement dedicated to making sure no
          one suffers due to blood shortage.
        </p>
        <Link to={'/register'} className="btn btn-accent btn-lg rounded-xl text-white">
          Become a Donor
        </Link>
      </section>
    </div>
  );
};

export default AboutUsPage;
