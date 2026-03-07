"use client";

import { useState } from "react";
import {FaEnvelope, FaMapMarkerAlt,FaPhoneAlt,FaClock, FaFacebookF,FaGithub,FaLinkedinIn,FaPaperPlane,} from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactPage = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    setSuccess("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSending(false);
    setSuccess("Your message has been sent successfully.");
    setFormData(initialForm);
  };

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-5xl">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="mt-4 text-sm leading-7 text-base-content/70 md:text-base">
            Have a question, suggestion, or collaboration idea? Reach out through
            the contact form and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold">Let’s talk</h2>
              <p className="mt-3 text-sm leading-7 text-white/85">
                We’d love to hear from you. Whether it’s about events, support,
                partnerships, or feedback, our team is always ready to connect.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-white/15 p-3">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-white/80">contact@your-event.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-white/15 p-3">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-white/80">+880 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-white/15 p-3">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-white/80">Banasree, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-white/15 p-3">
                    <FaClock />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-sm text-white/80">Mon - Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={"https://www.facebook.com"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:scale-105 hover:bg-white/25"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={"https://github.com/Ninalfi"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:scale-105 hover:bg-white/25"
                >
                  <FaGithub />
                </a>
                <a
                  href={"https://www.linkedin.com/"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:scale-105 hover:bg-white/25"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold">Quick Response</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/70">
                  Most messages are answered within 24 hours during working days.
                </p>
              </div>

              <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold">Support Friendly</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/70">
                  Ask questions about events, booking, management, or general help.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="mt-2 text-sm leading-7 text-base-content/70">
              Fill out the form below and send us your message directly.
            </p>

            {success && (
              <div className="alert alert-success mt-6 shadow-sm">
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-error">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-error">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Write a subject"
                  className="input input-bordered w-full"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-error">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message"
                  className="textarea textarea-bordered w-full"
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-error">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn btn-primary rounded-full px-8"
              >
                {sending ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;