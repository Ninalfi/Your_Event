"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTicketAlt, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

const BookingModal = ({ event, eventId }) => {
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const isPaidEvent =
    event.price &&
    event.price.toLowerCase() !== "free" &&
    event.price !== "$0";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const bookingData = {
      bookingId: Date.now(),
      eventId,
      title: event.title,
      category: event.category,
      date: event.date,
      location: event.location,
      price: event.price,
      image: event.image,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      tickets: form.tickets.value,
      message: form.message.value,
      paymentMethod: isPaidEvent ? paymentMethod : "free",
      status: isPaidEvent ? "Payment Pending / Confirmed" : "Booked",
      bookedAt: new Date().toISOString(),
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("eventBookings")) || [];

    localStorage.setItem(
      "eventBookings",
      JSON.stringify([...existingBookings, bookingData])
    );

    setSubmitted(true);
    document.getElementById("booking_modal").close();

    setTimeout(() => {
      router.push("/my-bookings");
    }, 800);
  };

  return (
    <>
      <button
        className="btn btn-primary w-full rounded-full px-6"
        onClick={() => document.getElementById("booking_modal").showModal()}
      >
        <FaTicketAlt />
        Join This Event
      </button>

      <dialog id="booking_modal" className="modal">
        <div className="modal-box max-w-2xl rounded-3xl">
          <h3 className="text-2xl font-bold">Book Your Seat</h3>
          <p className="mt-2 text-sm text-base-content/70">
            Fill in the form below to join{" "}
            <span className="font-semibold">{event.title}</span>.
          </p>

          <div className="mt-4 rounded-2xl bg-base-200/50 p-4 text-sm">
            <div className="flex items-center justify-between">
              <span>Event Price</span>
              <span className="font-semibold">{event.price}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Tickets</label>
                <input
                  type="number"
                  name="tickets"
                  min="1"
                  defaultValue="1"
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Optional message"
              ></textarea>
            </div>

            {isPaidEvent && (
              <div className="rounded-2xl border border-base-200 p-5">
                <h4 className="text-lg font-semibold">Payment Information</h4>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-base-200 p-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="radio radio-primary"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    <FaCreditCard className="text-primary" />
                    <span>Card Payment</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-base-200 p-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="radio radio-primary"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <FaMoneyBillWave className="text-primary" />
                    <span>Cash on Arrival</span>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="input input-bordered w-full"
                      required
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="input input-bordered w-full"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      className="input input-bordered w-full md:col-span-2"
                      required
                    />
                  </div>
                )}
              </div>
            )}

            <div className="modal-action mt-6 flex items-center justify-between">
              <form method="dialog">
                <button className="btn btn-ghost">Cancel</button>
              </form>

              <button type="submit" className="btn btn-primary px-6">
                {isPaidEvent ? "Confirm & Pay" : "Confirm Booking"}
              </button>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {submitted && (
        <div className="alert alert-success mt-4 shadow-sm">
          <span>Your booking was submitted successfully.</span>
        </div>
      )}
    </>
  );
};

export default BookingModal;