"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrashAlt,
  FaTicketAlt,
} from "react-icons/fa";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("eventBookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleDelete = (bookingId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.bookingId !== bookingId
    );
    setBookings(updatedBookings);
    localStorage.setItem("eventBookings", JSON.stringify(updatedBookings));
  };

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            My <span className="text-primary">Bookings</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-base-content/70 md:text-base">
            Here are the events you booked to join.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-base-200 bg-base-200/30 p-10 text-center">
            <h3 className="text-xl font-semibold">No bookings yet</h3>
            <p className="mt-2 text-sm text-base-content/70">
              You haven’t joined any events yet.
            </p>
            <Link href="/events">
              <button className="btn btn-primary mt-6 rounded-full px-6">
                Browse Events
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bookings.map((booking) => (
              <div
                key={booking.bookingId}
                className="overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm"
              >
                <img
                  src={booking.image}
                  alt={booking.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="badge badge-outline">{booking.category}</span>
                    <span className="text-sm font-semibold text-base-content/70">
                      {booking.price}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold">{booking.title}</h2>

                  <div className="mt-4 space-y-2 text-sm text-base-content/60">
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      {booking.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      {booking.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaTicketAlt className="text-primary" />
                      {booking.tickets} ticket(s)
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {booking.status}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Link href={`/events/${booking.eventId}`} className="flex-1">
                      <button className="btn btn-outline w-full">View</button>
                    </Link>

                    <button
                      onClick={() => handleDelete(booking.bookingId)}
                      className="btn btn-error btn-outline flex-1"
                    >
                      <FaTrashAlt />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;