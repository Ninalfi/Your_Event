"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Registration submitted successfully.");
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-[2rem] border border-base-200 bg-base-100 p-6 shadow-sm md:p-8">
          <h1 className="text-3xl font-bold md:text-4xl">
            Create an Account
          </h1>
          <p className="mt-3 text-sm leading-7 text-base-content/70 md:text-base">
            Register to join events, manage bookings, and explore the platform.
          </p>

          {success && (
            <div className="alert alert-success mt-6 shadow-sm">
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <label className="input input-bordered flex items-center gap-3">
                <FaUser className="text-base-content/60" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Enter your full name"
                  required
                />
              </label>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <label className="input input-bordered flex items-center gap-3">
                <FaEnvelope className="text-base-content/60" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Enter your email"
                  required
                />
              </label>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>
              <label className="input input-bordered flex items-center gap-3">
                <FaLock className="text-base-content/60" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Enter your password"
                  required
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full rounded-full">
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-base-content/70">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
