import events from "@/app/data/events.json";
import BookingModal from "@/components/buttons/BookingModal";
import Link from "next/link";
import { notFound } from "next/navigation";
import {FaCalendarAlt,FaMapMarkerAlt,FaTag,FaArrowLeft, FaClock,FaUsers,
} from "react-icons/fa";

const EventDetailsPage = async ({ params }) => {
  const { id } = await params;
  const eventIndex = parseInt(id, 10);
  const event = events[eventIndex];

  if (!event) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-base-100 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4">

        <div className="overflow-hidden rounded-[2rem] border border-base-200 bg-base-100 shadow-xl">
          <img
            src={event.image}
            alt={event.title}
            className="h-[260px] w-full object-cover md:h-[420px]"
          />

          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.5fr_0.9fr]">
            {/* Left Content */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <FaTag />
                  {event.category}
                </span>

                <span className="rounded-full bg-base-200 px-4 py-2 text-sm font-semibold text-base-content/70">
                  {event.price}
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {event.title}
              </h1>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-base-200 bg-base-200/30 p-4">
                  <div className="mt-1 text-primary">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-base-content/60">Event Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-base-200 bg-base-200/30 p-4">
                  <div className="mt-1 text-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-base-content/60">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-base-200 bg-base-200/30 p-4">
                  <div className="mt-1 text-primary">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-base-content/60">Duration</p>
                    <p className="font-semibold">Full Day Event</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-base-200 bg-base-200/30 p-4">
                  <div className="mt-1 text-primary">
                    <FaUsers />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-base-content/60">Audience</p>
                    <p className="font-semibold">Open for Everyone</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold">About this event</h2>
                <p className="mt-4 leading-8 text-base-content/75">
                  {event.fullDescription}
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-base-200 bg-base-200/30 p-6">
                <h3 className="text-xl font-semibold">Why attend?</h3>
                <ul className="mt-4 space-y-3 text-base-content/75">
                  <li>• Learn from industry speakers and event organizers.</li>
                  <li>• Connect with attendees, creators, and professionals.</li>
                  <li>• Discover ideas, opportunities, and future collaborations.</li>
                  <li>• Enjoy a polished and engaging event experience.</li>
                </ul>
              </div>
            </div>

            {/* Right Booking Card */}
            <aside className="h-fit rounded-[2rem] border border-base-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold">Reserve Your Spot</h2>
              <p className="mt-3 text-sm leading-7 text-base-content/70">
                Join this event by completing a quick booking request. Seats may be limited depending on availability.
              </p>

              <div className="mt-6 space-y-4 rounded-2xl bg-base-200/40 p-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">Ticket Price</span>
                  <span className="font-semibold">{event.price}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">Category</span>
                  <span className="font-semibold">{event.category}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">Venue</span>
                  <span className="font-semibold text-right">{event.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <BookingModal event={event} eventId={eventIndex} />
              </div>

              <p className="mt-4 text-xs leading-6 text-base-content/50">
                By joining this event, you agree to provide your contact details for booking confirmation.
              </p>
            </aside>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center hover:text-primary mt-10">
         <Link href="/events" className="btn btn-outline btn-sm mb-8 rounded-full">
          <FaArrowLeft />
          Back to Events
        </Link>
      </div>

    </section>
  );
};

export default EventDetailsPage;